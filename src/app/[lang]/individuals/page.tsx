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

export default async function Individual({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const t = dictionary.pages.individuals.main;
	const commonCta = dictionary.pages.individuals.common.cta;

	const individualServices = [
		{
			...t.services.categories.personalGrowth,
			href: '/individuals/personal-growth',
			icon: '🌱'
		},
		{
			...t.services.categories.consultancy,
			href: '/individuals/consultancy',
			icon: '💡'
		},
		{
			...t.services.categories.development,
			href: '/individuals/development',
			icon: '💻'
		},
		{
			...t.services.categories.cryptoWeb3,
			href: '/individuals/crypto-web3',
			icon: '🔗'
		},
		{
			...t.services.categories.fiscalOptimization,
			href: '/individuals/fiscal-optimisation',
			icon: '📊'
		}
	];

	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
							{t.hero.title}
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							{t.hero.subtitle}
						</p>
						<Button variant='default' size='lg' asChild>
							<Link href='/about/contact'>{commonCta.getStarted}</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='container px-4 md:px-6 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{individualServices.map(service => (
						<Card
							key={service.title}
							className='group hover:shadow-lg transition-all'>
							<CardHeader>
								<div className='flex items-center gap-4'>
									<span className='text-4xl'>{service.icon}</span>
									<div>
										<CardTitle>{service.title}</CardTitle>
										<CardDescription>{service.description}</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<Button
									variant='ghost'
									className='w-full group-hover:translate-x-1 transition-transform'
									asChild>
									<Link href={service.href}>
										{commonCta.learnMore} <span className='ml-2'>→</span>
									</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Benefits Section */}
			<section className='bg-muted py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='grid gap-12 lg:grid-cols-2'>
						<div className='space-y-4'>
							<h2 className='text-3xl font-bold tracking-tighter'>
								{t.approach.title}
							</h2>
							<p className='text-muted-foreground'>
								{t.approach.description}
							</p>
						</div>
						<div className='grid gap-4'>
							{t.benefits.items.map((benefit: string, index: number) => (
								<Card key={index}>
									<CardHeader>
										<CardTitle>{benefit}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className='text-muted-foreground'>
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
			<section className='py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<Card className='bg-primary text-primary-foreground'>
						<CardHeader>
							<CardTitle className='text-2xl md:text-3xl text-center'>
								{commonCta.contact}
							</CardTitle>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<Button size='lg' variant='secondary' asChild>
								<Link href='/about/contact'>{commonCta.schedule}</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
