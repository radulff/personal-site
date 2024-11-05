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

export default async function Consultancy({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const locales = await getDictionary(lang);

	const consultingServices = [
		{
			title: 'Career Guidance',
			description: 'Professional career path planning',
			icon: '🎯'
		},
		{
			title: 'Skill Development',
			description: 'Personal skill enhancement strategies',
			icon: '📚'
		},
		{
			title: 'Decision Making',
			description: 'Strategic decision-making support',
			icon: '🤔'
		}
	];

	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Personal Consultancy Services
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Expert guidance for your personal and professional development
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='container px-4 md:px-6 py-12'>
				<div className='grid gap-6 md:grid-cols-3'>
					{consultingServices.map(service => (
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

			{/* Approach Section */}
			<section className='bg-muted py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='grid gap-12 lg:grid-cols-2'>
						<Card>
							<CardHeader>
								<CardTitle>Our Approach</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4 text-muted-foreground'>
									<li>• Personalized assessment and planning</li>
									<li>• One-on-one mentoring sessions</li>
									<li>• Goal-oriented development plans</li>
									<li>• Regular progress evaluation</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Benefits</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4 text-muted-foreground'>
									<li>• Clear career direction</li>
									<li>• Enhanced decision-making skills</li>
									<li>• Improved professional capabilities</li>
									<li>• Greater self-confidence</li>
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
								Ready to Start Your Journey?
							</CardTitle>
							<CardDescription className='text-center text-primary-foreground/80'>
								{"Let's work together to achieve your goals"}
							</CardDescription>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<Button size='lg' variant='secondary' asChild>
								<Link href='/about/contact'>Schedule a Consultation</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}
