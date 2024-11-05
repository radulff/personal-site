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
	const locales = await getDictionary(lang);

	const cryptoServices = [
		{
			title: 'Blockchain Development',
			description: 'Smart contracts and dApp development',
			icon: '🔗'
		},
		{
			title: 'Web3 Integration',
			description: 'Connect your business with blockchain technology',
			icon: '🌐'
		},
		{
			title: 'Crypto Strategy',
			description: 'Digital asset management and strategy',
			icon: '📊'
		}
	];

	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Crypto & Web3 Solutions
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Embrace the future of digital technology with our blockchain and
							cryptocurrency expertise
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='container px-4 md:px-6 py-12'>
				<div className='grid gap-6 md:grid-cols-3'>
					{cryptoServices.map(service => (
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

			{/* Features Section */}
			<section className='bg-muted py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='grid gap-12 lg:grid-cols-2'>
						<Card>
							<CardHeader>
								<CardTitle>Why Choose Us for Web3?</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4 text-muted-foreground'>
									<li>• Deep understanding of blockchain technology</li>
									<li>• Experience with multiple blockchain platforms</li>
									<li>• Security-first development approach</li>
									<li>• Proven track record in crypto projects</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Our Process</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4 text-muted-foreground'>
									<li>• Thorough requirements analysis</li>
									<li>• Custom blockchain solution design</li>
									<li>• Secure implementation and testing</li>
									<li>• Ongoing support and maintenance</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<Card className='bg-primary text-primary-foreground'>
						<CardHeader>
							<CardTitle className='text-2xl md:text-3xl text-center'>
								Ready to Enter the Web3 Space?
							</CardTitle>
							<CardDescription className='text-center text-primary-foreground/80'>
								{
									"Let's discuss how blockchain technology can transform your business"
								}
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
