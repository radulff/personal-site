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
	const locales = await getDictionary(lang);

	const businessServices = [
		{
			title: 'Consultancy',
			description: 'Strategic business advice and guidance',
			href: '/business/consultancy',
			icon: '💡'
		},
		{
			title: 'Development',
			description: 'Custom software and digital solutions',
			href: '/business/development',
			icon: '💻'
		},
		{
			title: 'Crypto & Web3',
			description: 'Blockchain and cryptocurrency solutions',
			href: '/business/crypto-web3',
			icon: '🔗'
		},
		{
			title: 'Marketing',
			description: 'Digital marketing and growth strategies',
			href: '/business/marketing',
			icon: '📈'
		},
		{
			title: 'Fiscal Optimisation',
			description: 'Tax efficiency and financial planning',
			href: '/business/fiscal-optimisation',
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
							Business Solutions
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Comprehensive business services to help your company grow and
							succeed in the digital age
						</p>
						<Button variant='default' size='lg' asChild>
							<Link href='/about/contact'>Get Started</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='container px-4 md:px-6 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{businessServices.map(service => (
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

			{/* Why Choose Us */}
			<section className='bg-muted py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='grid gap-12 lg:grid-cols-2'>
						<div className='space-y-4'>
							<h2 className='text-3xl font-bold tracking-tighter'>
								Why Choose Our Business Services?
							</h2>
							<p className='text-muted-foreground'>
								We combine expertise, innovation, and a proven track record to
								deliver exceptional results for your business.
							</p>
						</div>
						<div className='grid gap-4'>
							<Card>
								<CardHeader>
									<CardTitle>Expertise & Experience</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-muted-foreground'>
										Years of experience working with businesses across various
										industries and scales.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Tailored Solutions</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-muted-foreground'>
										Custom strategies and solutions designed specifically for
										your business needs.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Innovation Focus</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-muted-foreground'>
										Staying ahead with the latest technologies and business
										practices.
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
								Ready to Transform Your Business?
							</CardTitle>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<Button size='lg' variant='secondary' asChild>
								<Link href='/about/contact'>Contact Us Today</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
