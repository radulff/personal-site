import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '../../../i18nConfig';
import LocaleSwitcher from '@/components/LocaleSwitcher';
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
			href: '/business'
		},
		{
			title: t.services.cards.individual.title,
			description: t.services.cards.individual.description,
			href: '/individuals'
		},
		{
			title: t.services.cards.portfolio.title,
			description: t.services.cards.portfolio.description,
			href: '/about/developer-portfolio'
		}
	];

	return (
		<main className='flex flex-col min-h-screen'>
			{/* Hero Section */}
			<section className='relative flex flex-col items-center justify-center py-24 text-center px-4'>
				<div className='absolute inset-0 -z-10 bg-gradient-to-b from-gray-100 to-white' />
				<div className='space-y-8 max-w-4xl mx-auto'>
					<div className='space-y-4'>
						<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
							{t.hero.title}
						</h1>
						<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl'>
							{t.hero.subtitle}
						</p>
					</div>
					<div className='flex flex-col sm:flex-row justify-center gap-4'>
						<Button variant='default' size='lg' asChild>
							<Link href='/about'>{t.cta.learnMore}</Link>
						</Button>
						<Button variant='outline' size='lg' asChild>
							<Link href='/about/contact'>{t.cta.contact}</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className='py-16 px-4 bg-gray-50'>
				<div className='max-w-6xl mx-auto space-y-8'>
					<div className='text-center space-y-4'>
						<h2 className='text-3xl font-bold'>{t.services.title}</h2>
						<p className='text-gray-500 max-w-[600px] mx-auto'>
							{t.services.subtitle}
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-6'>
						{services.map(service => (
							<Card
								key={service.title}
								className='hover:shadow-lg transition-shadow'>
								<CardHeader>
									<CardTitle>{service.title}</CardTitle>
									<CardDescription>{service.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<Button variant='ghost' asChild className='w-full'>
										<Link href={service.href}>{t.cta.learnMore} →</Link>
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Profile Section */}
			<section className='py-16 px-4'>
				<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8'>
					<div className='md:w-1/2'>
						<Image
							src='/logo.png'
							alt='Raul Vila'
							width={400}
							height={400}
							className='rounded-lg shadow-xl'
						/>
					</div>
					<div className='md:w-1/2 space-y-4'>
						<h2 className='text-3xl font-bold'>{t.about.title}</h2>
						<p className='text-gray-600'>{t.about.description}</p>
						<div className='flex gap-4'>
							<Button variant='outline' asChild>
								<Link href='/links'>{t.cta.links}</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
