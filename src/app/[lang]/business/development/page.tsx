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
	const dictionary = await getDictionary(lang);
	const t = dictionary.pages.business.development;
	const commonCta = dictionary.pages.business.common.cta;

	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							{t.title}
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							{t.subtitle}
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='container px-4 md:px-6 py-12'>
				<div className='grid gap-6 md:grid-cols-3'>
					{t.services.map(service => (
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
						{t.technologies.title}
					</h2>
					<div className='grid gap-6 md:grid-cols-3'>
						{Object.entries(t.technologies.categories).map(
							([key, category]) => (
								<Card key={key}>
									<CardHeader>
										<CardTitle>{category.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className='space-y-2'>
											{category.items.map((item: string) => (
												<li key={item} className='text-muted-foreground'>
													• {item}
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							)
						)}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className='container px-4 md:px-6 py-12 md:py-24'>
				<Card>
					<CardHeader>
						<CardTitle className='text-2xl'>{t.process.title}</CardTitle>
						<CardDescription>{t.process.subtitle}</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-4 md:grid-cols-2'>
						{t.process.steps.map(step => (
							<div key={step.title} className='space-y-2'>
								<h3 className='font-semibold'>{step.title}</h3>
								<p className='text-muted-foreground'>{step.description}</p>
							</div>
						))}
					</CardContent>
				</Card>
			</section>

			{/* CTA Section */}
			<section className='py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<Card className='bg-primary text-primary-foreground'>
						<CardHeader>
							<CardTitle className='text-2xl md:text-3xl text-center'>
								{commonCta.contact}
							</CardTitle>
							<CardDescription className='text-center text-primary-foreground/80'>
								{t.subtitle}
							</CardDescription>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<Button size='lg' variant='secondary' asChild>
								<Link href='/about/contact'>{commonCta.getStarted}</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}
