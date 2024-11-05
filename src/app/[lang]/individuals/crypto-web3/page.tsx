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
			title: 'Blockchain Education',
			description: 'Learn blockchain fundamentals and applications',
			icon: '📚'
		},
		{
			title: 'Crypto Investment',
			description: 'Personal cryptocurrency investment guidance',
			icon: '💰'
		},
		{
			title: 'Web3 Navigation',
			description: 'Learn to navigate the Web3 ecosystem',
			icon: '🧭'
		}
	];

	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Personal Crypto & Web3 Guidance
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Navigate the future of digital assets and blockchain technology
							with confidence
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

			{/* Learning Path Section */}
			<section className='bg-muted py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='grid gap-12 lg:grid-cols-2'>
						<Card>
							<CardHeader>
								<CardTitle>Learning Path</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4 text-muted-foreground'>
									<li>• Understanding blockchain basics</li>
									<li>• Cryptocurrency fundamentals</li>
									<li>• DeFi and Web3 applications</li>
									<li>• Security best practices</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>{"What You'll Gain"}</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4 text-muted-foreground'>
									<li>• Crypto market understanding</li>
									<li>• Web3 navigation skills</li>
									<li>• Investment strategies</li>
									<li>• Risk management knowledge</li>
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
								Ready to Enter the Web3 World?
							</CardTitle>
							<CardDescription className='text-center text-primary-foreground/80'>
								Start your journey into blockchain and cryptocurrency today
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
