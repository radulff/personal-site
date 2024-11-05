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

export default async function Development({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const locales = await getDictionary(lang);

	const developmentAreas = [
		{
			title: 'Programming Skills',
			description: 'Learn modern programming languages and frameworks',
			icon: '💻'
		},
		{
			title: 'Technical Mentoring',
			description: 'One-on-one guidance and support',
			icon: '👨‍🏫'
		},
		{
			title: 'Project Guidance',
			description: 'Help with personal technical projects',
			icon: '🚀'
		}
	];

	const technologies = [
		{
			category: 'Web Development',
			items: ['JavaScript/TypeScript', 'React', 'Node.js', 'Next.js']
		},
		{
			category: 'Mobile Development',
			items: ['React Native', 'Flutter', 'iOS', 'Android']
		},
		{
			category: 'Other Skills',
			items: ['Git', 'DevOps', 'Testing', 'Architecture']
		}
	];

	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Technical Development Services
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Personalized technical mentoring to help you grow as a developer
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='container px-4 md:px-6 py-12'>
				<div className='grid gap-6 md:grid-cols-3'>
					{developmentAreas.map(area => (
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

			{/* Technologies Section */}
			<section className='bg-muted py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<h2 className='text-2xl font-bold text-center mb-12'>
						{"What You'll Learn"}
					</h2>
					<div className='grid gap-6 md:grid-cols-3'>
						{technologies.map(tech => (
							<Card key={tech.category}>
								<CardHeader>
									<CardTitle>{tech.category}</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className='space-y-2'>
										{tech.items.map(item => (
											<li key={item} className='text-muted-foreground'>
												• {item}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className='container px-4 md:px-6 py-12 md:py-24'>
				<Card>
					<CardHeader>
						<CardTitle className='text-2xl'>Learning Journey</CardTitle>
						<CardDescription>Your path to technical excellence</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-4 md:grid-cols-2'>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Assessment</h3>
							<p className='text-muted-foreground'>
								Evaluate your current skills and goals
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Learning Plan</h3>
							<p className='text-muted-foreground'>
								Create a personalized learning roadmap
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Hands-on Practice</h3>
							<p className='text-muted-foreground'>
								Work on real projects and exercises
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Continuous Growth</h3>
							<p className='text-muted-foreground'>
								Regular feedback and skill advancement
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
								Ready to Level Up Your Tech Skills?
							</CardTitle>
							<CardDescription className='text-center text-primary-foreground/80'>
								Start your journey to becoming a better developer today
							</CardDescription>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<Button size='lg' variant='secondary' asChild>
								<Link href='/about/contact'>Start Learning</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}
