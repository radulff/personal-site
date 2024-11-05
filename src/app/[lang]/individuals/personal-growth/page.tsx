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

export default async function PersonalGrowth({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const locales = await getDictionary(lang);

	const growthAreas = [
		{
			title: 'Skill Development',
			description: 'Enhance your professional capabilities',
			icon: '🎯'
		},
		{
			title: 'Career Growth',
			description: 'Strategic career planning and advancement',
			icon: '📈'
		},
		{
			title: 'Personal Development',
			description: 'Build confidence and leadership skills',
			icon: '🌱'
		}
	];

	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Personal Growth Services
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Unlock your potential and achieve personal excellence through
							targeted mentoring
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='container px-4 md:px-6 py-12'>
				<div className='grid gap-6 md:grid-cols-3'>
					{growthAreas.map(area => (
						<Card key={area.title} className='hover:shadow-lg transition-all'>
							<CardHeader>
								<div className='flex items-center gap-4'>
									<span className='text-4xl'>{area.icon}</span>
									<div>
										<CardTitle>{area.title}</CardTitle>
										<CardDescription>{area.description}</CardDescription>
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
									<li>• Personalized growth assessment</li>
									<li>• Custom development plans</li>
									<li>• Regular progress tracking</li>
									<li>• Continuous feedback and support</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>{"What You'll Gain"}</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4 text-muted-foreground'>
									<li>• Enhanced professional skills</li>
									<li>• Improved self-confidence</li>
									<li>• Clear career direction</li>
									<li>• Better decision-making abilities</li>
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
						<CardTitle className='text-2xl'>Growth Journey</CardTitle>
						<CardDescription>
							Your path to personal and professional excellence
						</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-4 md:grid-cols-2'>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Assessment</h3>
							<p className='text-muted-foreground'>
								Understanding your current position and goals
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Planning</h3>
							<p className='text-muted-foreground'>
								Creating your personalized development roadmap
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Implementation</h3>
							<p className='text-muted-foreground'>
								Taking action and developing new skills
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Evolution</h3>
							<p className='text-muted-foreground'>
								Continuous growth and advancement
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
								Ready to Start Your Growth Journey?
							</CardTitle>
							<CardDescription className='text-center text-primary-foreground/80'>
								Take the first step towards your personal development
							</CardDescription>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<Button size='lg' variant='secondary' asChild>
								<Link href='/about/contact'>Start Now</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}
