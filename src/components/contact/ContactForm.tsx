'use client';

import { useState, useRef } from 'react';
import { env } from 'process';
import { validators } from '@/utils/validators';
import { logger } from '@/utils/logger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';

interface ContactFormProps {
	locales: {
		labels: {
			name: string;
			email: string;
			subject: string;
			message: string;
		};
		buttonSubmit: string;
		recaptchaNode: string;
	};
	extraclass?: string;
}

const ContactForm = ({ locales, extraclass }: ContactFormProps) => {
	const [form, setForm] = useState({
		name: { value: '', error: false },
		email: { value: '', error: false },
		subject: { value: '', error: false },
		message: { value: '', error: false }
	});
	const [userStep, setUserStep] = useState<
		null | 'submitting' | 'success' | 'error'
	>(null);
	const formRef = useRef<HTMLFormElement | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm(prevForm => ({
			...prevForm,
			[name]: { value, error: false }
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setUserStep('submitting');

		const newForm = {
			...form,
			name: { ...form.name, error: !validators.isStringValid(form.name.value) },
			email: {
				...form.email,
				error: !validators.isEmailValid(form.email.value)
			},
			subject: {
				...form.subject,
				error: !validators.isStringValid(form.subject.value)
			},
			message: {
				...form.message,
				error: !validators.isStringValid(form.message.value)
			}
		};

		setForm(newForm);

		if (Object.values(newForm).some(field => field.error)) {
			setUserStep(null);
			return;
		}

		try {
			const token = await (window as any).grecaptcha.execute(
				env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
				{ action: 'submit' }
			);
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					token,
					lang: 'en',
					name: form.name.value,
					email: form.email.value,
					subject: form.subject.value,
					message: form.message.value
				})
			});

			if (response.ok) {
				setUserStep('success');
			} else {
				const errorData = await response.json();
				logger.trackError(new Error('Submit error'), 'fatal', errorData);
				setUserStep('error');
			}
		} catch (error) {
			if (error instanceof Error) {
				logger.trackError(error, 'fatal');
			}
			setUserStep('error');
		}
	};

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit}
			className={cn(
				'relative overflow-hidden rounded-2xl bg-card p-6',
				extraclass
			)}>
			{userStep === 'success' || userStep === 'error' ? (
				<div className='absolute inset-0 z-50 grid place-content-center bg-background p-6'>
					<div className='w-[448px] max-w-md text-center'>
						<div className='mx-auto my-4 text-6xl'>
							{userStep === 'success' ? (
								<CheckCircle className='w-16 h-16 text-green-500' />
							) : (
								<XCircle className='w-16 h-16 text-red-500' />
							)}
						</div>
						<span className='text-base'>
							{userStep === 'success'
								? 'Your submit is successful'
								: 'Your submit has an error'}
						</span>
						{userStep === 'error' && (
							<Button
								className='mx-auto mt-6 block'
								onClick={() => setUserStep(null)}>
								Try Again
							</Button>
						)}
					</div>
				</div>
			) : null}

			<div className='space-y-4'>
				<div className='space-y-2'>
					<label
						htmlFor='name'
						className={cn(
							'text-sm font-medium',
							form.name.error && 'text-destructive'
						)}>
						{locales.labels.name}
					</label>
					<Input
						value={form.name.value}
						onChange={handleChange}
						disabled={userStep !== null}
						type='text'
						id='name'
						name='name'
						className={cn(form.name.error && 'border-destructive')}
					/>
				</div>

				<div className='space-y-2'>
					<label
						htmlFor='email'
						className={cn(
							'text-sm font-medium',
							form.email.error && 'text-destructive'
						)}>
						{locales.labels.email}
					</label>
					<Input
						value={form.email.value}
						onChange={handleChange}
						disabled={userStep !== null}
						type='email'
						id='email'
						name='email'
						className={cn(form.email.error && 'border-destructive')}
					/>
				</div>

				<div className='space-y-2'>
					<label
						htmlFor='subject'
						className={cn(
							'text-sm font-medium',
							form.subject.error && 'text-destructive'
						)}>
						{locales.labels.subject}
					</label>
					<Input
						value={form.subject.value}
						onChange={handleChange}
						disabled={userStep !== null}
						type='text'
						id='subject'
						name='subject'
						className={cn(form.subject.error && 'border-destructive')}
					/>
				</div>

				<div className='space-y-2'>
					<label
						htmlFor='message'
						className={cn(
							'text-sm font-medium',
							form.message.error && 'text-destructive'
						)}>
						{locales.labels.message}
					</label>
					<Textarea
						value={form.message.value}
						onChange={handleChange}
						disabled={userStep !== null}
						id='message'
						name='message'
						rows={4}
						className={cn(
							'resize-none',
							form.message.error && 'border-destructive'
						)}
					/>
				</div>

				<div
					className='text-xs text-muted-foreground'
					dangerouslySetInnerHTML={{
						__html: locales.recaptchaNode
							.replace(
								'*LINK:privacy-policy*',
								`<a href="https://policies.google.com/privacy" class="text-primary hover:underline" rel="noopener noreferrer" target="_blank">`
							)
							.replace('*LINK*', `</a>`)
							.replace(
								'*LINK:terms*',
								`<a href="https://policies.google.com/terms" class="text-primary hover:underline" rel="noopener noreferrer" target="_blank">`
							)
							.replace('*LINK*', `</a>`)
					}}
				/>

				<Button type='submit' className='w-full' disabled={userStep !== null}>
					{locales.buttonSubmit}
				</Button>
			</div>
		</form>
	);
};

export default ContactForm;
