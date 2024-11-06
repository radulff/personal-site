import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '../../../i18nConfig';
import { getDictionary } from '@/lib/getDictionary';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

export default async function Home({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const t = dictionary.pages.home;

	const services = [
		{
			title: t.services.cards.business.title,
			description: t.services.cards.business.description,
			href: '/business',
			icon: '💼'
		},
		{
			title: t.services.cards.individual.title,
			description: t.services.cards.individual.description,
			href: '/individuals',
			icon: '🌱'
		},
		{
			title: t.services.cards.portfolio.title,
			description: t.services.cards.portfolio.description,
			href: '/about/developer-portfolio',
			icon: '💻'
		}
	];

	return (
		<main className='flex flex-col min-h-screen'>
			{/* Hero Section with Dynamic Background */}
			<section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950' />
				<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")]' />

				<div className='relative container mx-auto px-4 py-24 flex flex-col items-center text-center z-10'>
					<div className='space-y-8 max-w-4xl'>
						<h1 className='text-5xl md:text-7xl font-bold text-black dark:text-white'>
							{t.hero.title}
						</h1>
						<p className='text-xl md:text-2xl text-black dark:text-white max-w-2xl mx-auto'>
							{t.hero.subtitle}
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Button
								size='lg'
								className='bg-forest-600 hover:bg-forest-700 text-white px-8 py-6 text-lg'
								asChild>
								<Link href='/about'>{t.cta.learnMore}</Link>
							</Button>
							<Button
								variant='outline'
								size='lg'
								className='border-forest-600 text-forest-600 hover:bg-forest-50 px-8 py-6 text-lg'
								asChild>
								<Link href='/about/contact'>{t.cta.contact}</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className='py-24 bg-gradient-to-b from-white to-forest-50 dark:from-forest-950 dark:to-forest-900'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-black dark:text-white mb-4'>
							{t.services.title}
						</h2>
						<p className='text-black/80 dark:text-white/80 max-w-2xl mx-auto'>
							{t.services.subtitle}
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{services.map(service => (
							<Card
								key={service.title}
								className='group hover:scale-105 transition-all duration-300 bg-white/50 dark:bg-forest-900/50 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
								<CardHeader>
									<div className='text-4xl mb-4'>{service.icon}</div>
									<CardTitle className='text-black dark:text-white'>
										{service.title}
									</CardTitle>
									<CardDescription className='text-black/70 dark:text-white/70'>
										{service.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Button
										variant='ghost'
										className='group-hover:text-black group-hover:bg-forest-50 dark:group-hover:text-white dark:group-hover:bg-forest-800/50 w-full'
										asChild>
										<Link href={service.href}>
											{t.cta.learnMore}
											<span className='ml-2 group-hover:translate-x-1 transition-transform'>
												→
											</span>
										</Link>
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Profile Section */}
			<section className='py-24 bg-white dark:bg-forest-950'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12'>
						<div className='md:w-1/2'>
							<div className='relative'>
								<div className='absolute -inset-4 bg-gradient-to-r from-forest-400 to-forest-600 rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition-all'></div>
								<Image
									src='/logo.png'
									alt='Raul Vila'
									width={400}
									height={400}
									className='relative rounded-lg'
								/>
							</div>
						</div>
						<div className='md:w-1/2 space-y-6'>
							<h2 className='text-4xl font-bold text-black dark:text-white'>
								{t.about.title}
							</h2>
							<p className='text-black/80 dark:text-white/80 text-lg'>
								{t.about.description}
							</p>
							<Button
								variant='outline'
								className='border-forest-500 text-black hover:bg-forest-50 dark:border-forest-400 dark:text-white dark:hover:bg-forest-900'
								asChild>
								<Link href='/links'>{t.cta.links}</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
