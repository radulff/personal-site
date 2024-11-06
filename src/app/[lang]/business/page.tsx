import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../i18nConfig';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import Link from 'next/link';

export default async function Business({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const t = dictionary.pages.business.main;
	const commonCta = dictionary.pages.business.common.cta;

	const businessServices = [
		{
			...t.services.categories.consultancy,
			href: '/business/consultancy',
			icon: '💡'
		},
		{
			...t.services.categories.development,
			href: '/business/development',
			icon: '💻'
		},
		{
			...t.services.categories.cryptoWeb3,
			href: '/business/crypto-web3',
			icon: '🔗'
		},
		{
			...t.services.categories.marketing,
			href: '/business/marketing',
			icon: '📈'
		},
		{
			title:
				t.services.categories.fiscalOptimization?.title ||
				'Fiscal Optimization',
			description:
				t.services.categories.fiscalOptimization?.description ||
				'Tax efficiency and financial planning',
			href: '/business/fiscal-optimisation',
			icon: '📊'
		}
	];

	return (
		<div className='min-h-screen relative'>
			{/* Background with gradient */}
			<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950 -z-10' />
			<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")] -z-10' />

			{/* Hero Section */}
			<section className='relative py-24'>
				<div className='container px-4'>
					<div className='flex flex-col items-center space-y-6 text-center'>
						<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-black dark:text-white'>
							{t.hero.title}
						</h1>
						<p className='mx-auto max-w-[700px] text-black/80 dark:text-white/80 text-lg md:text-xl'>
							{t.hero.subtitle}
						</p>
						<Button
							className='bg-forest-600 hover:bg-forest-700 text-white'
							size='lg'
							asChild>
							<Link href='/about/contact'>{commonCta.getStarted}</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='container px-4 py-24'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{businessServices.map(service => (
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
							<CardContent>
								<Button
									variant='ghost'
									className='w-full group-hover:text-black group-hover:bg-forest-50 dark:group-hover:text-white dark:group-hover:bg-forest-800/50'
									asChild>
									<Link href={service.href}>
										{commonCta.learnMore}
										<span className='ml-2 group-hover:translate-x-1 transition-transform'>
											→
										</span>
									</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Why Choose Us */}
			<section className='py-24 bg-gradient-to-b from-white to-forest-50 dark:from-forest-950 dark:to-forest-900'>
				<div className='container px-4'>
					<div className='grid gap-12 lg:grid-cols-2'>
						<div className='space-y-6'>
							<h2 className='text-3xl font-bold tracking-tighter text-black dark:text-white'>
								{t.approach.title}
							</h2>
							<p className='text-black/80 dark:text-white/80'>
								{t.approach.description}
							</p>
						</div>
						<div className='grid gap-6'>
							{t.benefits.items.map((benefit: string, index: number) => (
								<Card
									key={index}
									className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
									<CardHeader>
										<CardTitle className='text-black dark:text-white'>
											{benefit}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className='text-black/80 dark:text-white/80'>
											{t.approach.steps[index]}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-24 bg-gradient-to-b from-forest-50 to-white dark:from-forest-900 dark:to-forest-950'>
				<div className='container px-4'>
					<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
						<CardHeader>
							<CardTitle className='text-2xl md:text-3xl text-center text-black dark:text-white'>
								{commonCta.contact}
							</CardTitle>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<Button
								size='lg'
								className='bg-forest-600 hover:bg-forest-700 text-white'
								asChild>
								<Link href='/about/contact'>{commonCta.schedule}</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
