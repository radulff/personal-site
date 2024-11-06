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
		success: string;
		error: string;
		tryAgain: string;
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
	const isLocalhost =
		typeof window !== 'undefined' &&
		(window.location.hostname === 'localhost' ||
			window.location.hostname === '127.0.0.1');

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
			let token = 'localhost-token';

			if (!isLocalhost) {
				token = await (window as any).grecaptcha.execute(
					env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
					{ action: 'submit' }
				);
			}

			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					token,
					lang: 'en',
					name: form.name.value,
					email: form.email.value,
					subject: form.subject.value,
					message: form.message.value,
					isLocalhost
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
			className={cn('relative overflow-hidden rounded-2xl p-6', extraclass)}>
			{userStep === 'success' || userStep === 'error' ? (
				<div className='absolute inset-0 z-50 grid place-content-center bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm p-6'>
					<div className='w-full max-w-md text-center space-y-4'>
						<div className='mx-auto text-6xl'>
							{userStep === 'success' ? (
								<CheckCircle className='w-16 h-16 mx-auto text-forest-600' />
							) : (
								<XCircle className='w-16 h-16 mx-auto text-red-500' />
							)}
						</div>
						<span className='block text-base text-black dark:text-white'>
							{userStep === 'success' ? locales.success : locales.error}
						</span>
						{userStep === 'error' && (
							<Button
								className='mx-auto mt-6 block bg-forest-600 hover:bg-forest-700 text-white'
								onClick={() => setUserStep(null)}>
								{locales.tryAgain}
							</Button>
						)}
					</div>
				</div>
			) : null}

			<div className='space-y-6'>
				<div className='space-y-4'>
					<div className='space-y-2'>
						<label
							htmlFor='name'
							className={cn(
								'block text-sm font-medium text-black dark:text-white',
								form.name.error && 'text-red-500'
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
							className={cn(
								'bg-white/50 dark:bg-forest-900/50',
								form.name.error && 'border-red-500'
							)}
						/>
					</div>

					<div className='space-y-2'>
						<label
							htmlFor='email'
							className={cn(
								'block text-sm font-medium text-black dark:text-white',
								form.email.error && 'text-red-500'
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
							className={cn(
								'bg-white/50 dark:bg-forest-900/50',
								form.email.error && 'border-red-500'
							)}
						/>
					</div>

					<div className='space-y-2'>
						<label
							htmlFor='subject'
							className={cn(
								'block text-sm font-medium text-black dark:text-white',
								form.subject.error && 'text-red-500'
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
							className={cn(
								'bg-white/50 dark:bg-forest-900/50',
								form.subject.error && 'border-red-500'
							)}
						/>
					</div>

					<div className='space-y-2'>
						<label
							htmlFor='message'
							className={cn(
								'block text-sm font-medium text-black dark:text-white',
								form.message.error && 'text-red-500'
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
								'resize-none bg-white/50 dark:bg-forest-900/50',
								form.message.error && 'border-red-500'
							)}
						/>
					</div>
				</div>

				<div
					className='text-xs text-black/60 dark:text-white/60'
					dangerouslySetInnerHTML={{
						__html: locales.recaptchaNode
							.replace(
								'*LINK:privacy-policy*',
								`<a href="https://policies.google.com/privacy" class="text-forest-600 hover:underline" rel="noopener noreferrer" target="_blank">`
							)
							.replace('*LINK*', `</a>`)
							.replace(
								'*LINK:terms*',
								`<a href="https://policies.google.com/terms" class="text-forest-600 hover:underline" rel="noopener noreferrer" target="_blank">`
							)
							.replace('*LINK*', `</a>`)
					}}
				/>

				<Button
					type='submit'
					className='w-full bg-forest-600 hover:bg-forest-700 text-white'
					disabled={userStep !== null}>
					{locales.buttonSubmit}
				</Button>
			</div>
		</form>
	);
};

export default ContactForm;
