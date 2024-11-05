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

export default async function FiscalOptimisation({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const locales = await getDictionary(lang);

	const fiscalServices = [
		{
			title: 'Personal Tax Planning',
			description: 'Optimize your personal tax situation',
			icon: '📊'
		},
		{
			title: 'Investment Strategy',
			description: 'Smart investment planning and advice',
			icon: '💰'
		},
		{
			title: 'Financial Planning',
			description: 'Long-term financial goal planning',
			icon: '🎯'
		}
	];

	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Personal Fiscal Optimisation
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Strategic financial planning and tax optimization for individuals
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='container px-4 md:px-6 py-12'>
				<div className='grid gap-6 md:grid-cols-3'>
					{fiscalServices.map(service => (
						<Card
							key={service.title}
							className='hover:shadow-lg transition-all'>
							<CardHeader>
								<div className='flex items-center gap-4'>
									<span className='text-4xl'>{service.icon}</span>
									<div>
										<CardTitle>{service.title}</CardTitle>
										<CardDescription>{service.description}</CardDescription>
									</div>
								</div>
							</CardHeader>
						</Card>
					))}
				</div>
			</section>

			{/* Benefits Section */}
			<section className='bg-muted py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='grid gap-12 lg:grid-cols-2'>
						<Card>
							<CardHeader>
								<CardTitle>Key Benefits</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4 text-muted-foreground'>
									<li>• Optimized personal tax structure</li>
									<li>• Better financial planning</li>
									<li>• Increased savings</li>
									<li>• Secure financial future</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Our Approach</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4 text-muted-foreground'>
									<li>• Personal financial assessment</li>
									<li>• Custom optimization strategy</li>
									<li>• Regular review and adjustments</li>
									<li>• Long-term planning focus</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className='container px-4 md:px-6 py-12 md:py-24'>
				<Card>
					<CardHeader>
						<CardTitle className='text-2xl'>Our Process</CardTitle>
						<CardDescription>
							A systematic approach to personal financial optimization
						</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-4 md:grid-cols-2'>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Initial Assessment</h3>
							<p className='text-muted-foreground'>
								Comprehensive review of your financial situation
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Strategy Development</h3>
							<p className='text-muted-foreground'>
								Creating your personalized financial plan
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Implementation</h3>
							<p className='text-muted-foreground'>
								Executing the optimized financial strategy
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Monitoring</h3>
							<p className='text-muted-foreground'>
								Regular review and strategy adjustment
							</p>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* CTA Section */}
			<section className='py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<Card className='bg-primary text-primary-foreground'>
						<CardHeader>
							<CardTitle className='text-2xl md:text-3xl text-center'>
								Ready to Optimize Your Finances?
							</CardTitle>
							<CardDescription className='text-center text-primary-foreground/80'>
								{"Let's create a plan for your financial success"}
							</CardDescription>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<Button size='lg' variant='secondary' asChild>
								<Link href='/about/contact'>Get Started</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}