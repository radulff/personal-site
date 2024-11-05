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

	const developmentServices = [
		{
			title: 'Web Development',
			description: 'Modern web applications and websites',
			icon: '🌐'
		},
		{
			title: 'Mobile Development',
			description: 'Native and cross-platform mobile apps',
			icon: '📱'
		},
		{
			title: 'Custom Software',
			description: 'Tailored software solutions',
			icon: '💻'
		}
	];

	const technologies = [
		{
			category: 'Frontend',
			items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
		},
		{
			category: 'Backend',
			items: ['Node.js', 'Python', 'Go', 'PostgreSQL']
		},
		{
			category: 'Mobile',
			items: ['React Native', 'Flutter', 'iOS', 'Android']
		}
	];

	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Development Services
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Custom software solutions to drive your business forward
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='container px-4 md:px-6 py-12'>
				<div className='grid gap-6 md:grid-cols-3'>
					{developmentServices.map(service => (
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

			{/* Technologies Section */}
			<section className='bg-muted py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<h2 className='text-2xl font-bold text-center mb-12'>
						Technologies We Use
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
						<CardTitle className='text-2xl'>Our Development Process</CardTitle>
						<CardDescription>
							A systematic approach to delivering high-quality software
						</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-4 md:grid-cols-2'>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Planning & Analysis</h3>
							<p className='text-muted-foreground'>
								Thorough requirements gathering and project planning
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Design & Development</h3>
							<p className='text-muted-foreground'>
								Clean code and modern architecture implementation
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Testing & QA</h3>
							<p className='text-muted-foreground'>
								Comprehensive testing and quality assurance
							</p>
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Deployment & Support</h3>
							<p className='text-muted-foreground'>
								Smooth deployment and ongoing maintenance
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
								Ready to Build Your Next Project?
							</CardTitle>
							<CardDescription className='text-center text-primary-foreground/80'>
								{
									"Let's discuss your development needs and create something amazing together"
								}
							</CardDescription>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<Button size='lg' variant='secondary' asChild>
								<Link href='/about/contact'>Start Your Project</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}
