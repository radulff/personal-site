import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import { promises as fs } from 'fs';
import path from 'path';
import { validators } from '../../../utils/validators';
import { logger } from '@/utils';
import { DEFAULT_LANGUAGE } from '@/constants';
import { isValidRecaptcha } from '@/lib/recaptcha';

export async function POST(req: NextRequest) {
	const body = await req.json();
	const { token, ...formData } = body;

	if (process.env.REAL_ENV !== 'dev') {
		try {
			const recaptchaResponse = await fetch(
				`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
				{ method: 'POST' }
			);

			const recaptchaData = await recaptchaResponse.json();

			if (!recaptchaData.success) {
				return NextResponse.json(
					{ error: 'reCAPTCHA verification failed' },
					{ status: 400 }
				);
			}
		} catch (error) {
			return NextResponse.json(
				{ error: 'reCAPTCHA verification failed' },
				{ status: 400 }
			);
		}
	}

	if (
		!validators.isStringValid(formData.name) ||
		!validators.isEmailValid(formData.email) ||
		!validators.isStringValid(formData.subject) ||
		!validators.isStringValid(formData.message)
	) {
		// logger.trackMessage(
		// 	'Invalid data properties. In the usual flow, this error should never be thrown',
		// 	'warning',
		// 	{ method: 'post', route: 'api/contact' }
		// );
		return NextResponse.json({ message: 'Malformed request' }, { status: 400 });
	}

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD
		}
	});
	const templatePath = path.resolve(
		process.cwd(),
		'src/app/templates',
		'contact.hbs'
	);
	const templateSource = await fs.readFile(templatePath, 'utf8');
	const template = handlebars.compile(templateSource);
	const emailHtml = template({
		name: formData.name,
		message: formData.message
	});

	const response = await transporter.sendMail({
		from: formData.email,
		to: process.env.SMTP_USER,
		replyTo: formData.email,
		subject: formData.subject,
		html: emailHtml
	});

	if (!response.accepted[0]) {
		logger.trackError(
			new Error(
				"Nodemailer fails to send the user's email to SMTP_USER. As a result, the user is unable to contact the sales team"
			),
			'fatal',
			formData
		);
		return NextResponse.json(
			{ message: 'Error when confirming email delivery' },
			{ status: 500 }
		);
	}

	const localesContactFeedback: { subject: string; message: string } = (
		await import(
			`../../../../dictionaries/${formData.lang ?? DEFAULT_LANGUAGE}.json`
		)
	).default.emails.contactFeedback;

	const response2 = await transporter.sendMail({
		from: formData.email,
		to: formData.email,
		subject: localesContactFeedback.subject,
		text: localesContactFeedback.message
	});

	if (!response2.accepted[0]) {
		logger.trackError(
			new Error(
				'Nodemailer fails to send the confirmation message to the user indicating that the sales team has received their message'
			),
			'warning',
			formData
		);
	}

	return NextResponse.json({}, { status: 200 });
}
