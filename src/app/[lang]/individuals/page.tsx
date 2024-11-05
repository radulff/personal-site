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
	const locales = await getDictionary(lang);

	const individualServices = [
		{
			title: 'Personal Growth',
			description: 'Develop your skills and achieve your goals',
			href: '/individuals/personal-growth',
			icon: '🌱'
		},
		{
			title: 'Consultancy',
			description: 'Personal advice and guidance',
			href: '/individuals/consultancy',
			icon: '💡'
		},
		{
			title: 'Development',
			description: 'Technical mentoring and guidance',
			href: '/individuals/development',
			icon: '💻'
		},
		{
			title: 'Crypto & Web3',
			description: 'Navigate the blockchain ecosystem',
			href: '/individuals/crypto-web3',
			icon: '🔗'
		},
		{
			title: 'Fiscal Optimisation',
			description: 'Personal financial planning',
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
							Individual Services
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Personalized guidance and mentoring to help you achieve your
							personal and professional goals
						</p>
						<Button variant='default' size='lg' asChild>
							<Link href='/about/contact'>Start Your Journey</Link>
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
										Learn More <span className='ml-2'>→</span>
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
								Why Choose Individual Mentoring?
							</h2>
							<p className='text-muted-foreground'>
								Get personalized guidance and support to accelerate your growth
								and achieve your goals faster.
							</p>
						</div>
						<div className='grid gap-4'>
							<Card>
								<CardHeader>
									<CardTitle>Personalized Approach</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-muted-foreground'>
										Tailored guidance and strategies designed specifically for
										your needs and goals.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Expert Guidance</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-muted-foreground'>
										Benefit from years of experience and proven methodologies.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Flexible Learning</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-muted-foreground'>
										Learn at your own pace with adaptable mentoring schedules.
									</p>
								</CardContent>
							</Card>
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
								Ready to Start Your Growth Journey?
							</CardTitle>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<Button size='lg' variant='secondary' asChild>
								<Link href='/about/contact'>Contact Me Today</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
