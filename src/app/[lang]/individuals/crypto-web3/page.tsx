import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../../i18nConfig';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function CryptoWeb3({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const t = dictionary.pages.individuals.cryptoWeb3;
	const commonCta = dictionary.pages.individuals.common.cta;

	return (
		<main className='min-h-screen relative'>
			{/* Background with gradient */}
			<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950 -z-10' />
			<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")] -z-10' />

			{/* Hero Section */}
			<section className='relative py-24'>
				<div className='container px-4'>
					<div className='flex flex-col items-center space-y-6 text-center'>
						<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white'>
							{t.hero.title}
						</h1>
						<p className='mx-auto max-w-[700px] text-black/80 dark:text-white/80 text-lg md:text-xl'>
							{t.hero.subtitle}
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='container px-4 py-24'>
				<div className='grid gap-8 md:grid-cols-3'>
					{t.services.map((service: any) => (
						<Card
							key={service.title}
							className='group hover:scale-105 transition-all duration-300 bg-white/50 dark:bg-forest-900/50 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
							<CardHeader>
								<div className='flex items-center gap-4'>
									<span className='text-4xl'>{service.icon}</span>
									<div>
										<CardTitle className='text-black dark:text-white'>
											{service.title}
										</CardTitle>
										<CardDescription className='text-black/70 dark:text-white/70'>
											{service.description}
										</CardDescription>
									</div>
								</div>
							</CardHeader>
						</Card>
					))}
				</div>
			</section>

			{/* Learning Path Section */}
			<section className='py-24 bg-gradient-to-b from-white to-forest-50 dark:from-forest-950 dark:to-forest-900'>
				<div className='container px-4'>
					<div className='grid gap-8 lg:grid-cols-2'>
						<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
							<CardHeader>
								<CardTitle className='text-black dark:text-white'>
									{t.learning.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4'>
									{t.learning.items.map((item: string, index: number) => (
										<li 
											key={index}
											className='flex items-center text-black/80 dark:text-white/80'
										>
											<span className='mr-2'>•</span>
											{item}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>

						<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
							<CardHeader>
								<CardTitle className='text-black dark:text-white'>
									{t.benefits.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4'>
									{t.benefits.items.map((item: string, index: number) => (
										<li 
											key={index}
											className='flex items-center text-black/80 dark:text-white/80'
										>
											<span className='mr-2'>•</span>
											{item}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-24 bg-gradient-to-b from-forest-50 to-white dark:from-forest-900 dark:to-forest-950'>
				<div className='container px-4'>
					<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
						<CardHeader>
							<CardTitle className='text-2xl md:text-3xl text-center text-black dark:text-white'>
								{t.cta.title}
							</CardTitle>
							<CardDescription className='text-center text-black/70 dark:text-white/70'>
								{t.cta.description}
							</CardDescription>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<Button 
								size='lg'
								className='bg-forest-600 hover:bg-forest-700 text-white'
								asChild
							>
								<Link href='/about/contact'>{commonCta.getStarted}</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}
