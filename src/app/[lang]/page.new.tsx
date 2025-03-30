'use client';
import Image from 'next/image';
import { Locale } from '../../../i18nConfig';
import { getDictionary } from '@/lib/getDictionary';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { i18n } from '../../../i18nConfig';
import { usePathname, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface NewsletterDictionary {
	title: string;
	subtitle: string;
	placeholder: string;
	button: string;
	disclaimer: string;
	success: string;
	error: {
		invalid: string;
	};
}

interface Dictionary {
	layout: {
		footer: {
			newsletter: NewsletterDictionary;
		};
	};
	pages: {
		home: {
			about: {
				title: string;
				description: string;
			};
		};
	};
}

export default async function Home({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = (await getDictionary(lang)) as Dictionary;
	const t = dictionary.pages.home;

	const currentLocale = i18n.locales.find(locale => lang === locale) || 'en';
	const alternateLocale = currentLocale === 'en' ? 'es' : 'en';

	return (
		<main className='flex flex-col h-screen'>
			{/* Profile Section */}
			<section className='relative flex-1 flex items-center justify-center overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950' />
				<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")]' />

				<div className='relative container mx-auto px-4 flex flex-col items-center text-center z-10'>
					<div className='max-w-4xl mx-auto space-y-4'>
						<div className='relative mb-2'>
							<div className='absolute -inset-4 bg-gradient-to-r from-forest-400 to-forest-600 rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition-all'></div>
							<Image
								src='/images/RaulVila.png'
								alt='Raül Vila'
								width={120}
								height={120}
								className='relative rounded-lg mx-auto'
								priority
							/>
						</div>
						<h1 className='text-3xl md:text-5xl font-bold text-black dark:text-white'>
							{t.about.title}
						</h1>
						<p className='text-base md:text-lg text-black/80 dark:text-white/80 max-w-2xl mx-auto'>
							{t.about.description}
						</p>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className='w-full px-6 py-4 bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm'>
				<div className='max-w-screen-2xl mx-auto'>
					<div className='bg-white/50 dark:bg-forest-900/50 backdrop-blur-sm rounded-lg p-6 border border-forest-100 dark:border-forest-800'>
						<div className='max-w-2xl mx-auto text-center'>
							<h3 className='text-2xl font-bold mb-2 text-black dark:text-white'>
								{dictionary.layout.footer.newsletter.title}
							</h3>
							<p className='text-black/80 dark:text-white/80 mb-4'>
								{dictionary.layout.footer.newsletter.subtitle}
							</p>
							<NewsletterForm
								dictionary={dictionary.layout.footer.newsletter}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Footer Section */}
			<section className='w-full px-6 py-4 bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-t border-forest-100 dark:border-forest-800'>
				<div className='max-w-screen-2xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4'>
					{/* Language and Theme Toggles */}
					<div className='order-1 md:order-1 flex items-center gap-4'>
						<Button
							variant='outline'
							size='sm'
							className='h-7 w-16 border-forest-100 dark:border-forest-800 hover:bg-forest-50 dark:hover:bg-forest-800/50'>
							{currentLocale.toUpperCase()}
						</Button>
						<ThemeToggle />
					</div>

					{/* Copyright - Center */}
					<div className='order-2 md:order-2 text-sm text-black/60 dark:text-white/60'>
						Copyright 2025 Raül Vila©
					</div>
				</div>
			</section>
		</main>
	);
}

// Newsletter Form Component
function NewsletterForm({ dictionary }: { dictionary: NewsletterDictionary }) {
	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();

	const handleSubscribe = async (e: React.FormEvent) => {
		e.preventDefault();

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			toast({
				title: dictionary.error.invalid,
				variant: 'destructive'
			});
			return;
		}

		setIsLoading(true);

		// Replace this URL with your Substack publication URL
		const substackUrl = 'https://raulvila.substack.com/subscribe';

		// Open Substack subscription page in a new tab
		window.open(`${substackUrl}?email=${encodeURIComponent(email)}`, '_blank');

		toast({
			title: dictionary.success
		});

		setEmail('');
		setIsLoading(false);
	};

	return (
		<form
			onSubmit={handleSubscribe}
			className='flex flex-col sm:flex-row gap-3 mb-3'>
			<Input
				type='email'
				placeholder={dictionary.placeholder}
				value={email}
				onChange={e => setEmail(e.target.value)}
				className='flex-1 bg-white/50 dark:bg-forest-800/50'
				required
			/>
			<Button
				type='submit'
				disabled={isLoading}
				className='bg-forest-600 hover:bg-forest-700 text-white'>
				{isLoading ? (
					<span className='animate-spin'>↻</span>
				) : (
					dictionary.button
				)}
			</Button>
		</form>
	);
}
