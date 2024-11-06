import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../i18nConfig';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

export default async function About({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const locales = await getDictionary(lang);

	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							{locales.pages.about.title}
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							{locales.pages.about.whoAmITitle}
						</p>
					</div>
				</div>
			</section>

			<section className='container px-4 md:px-6 pb-12 md:pb-24'>
				<div className='grid gap-6 md:gap-8'>
					<Card>
						<CardHeader>
							<CardTitle>{locales.pages.about.whatIDoTitle}</CardTitle>
							<CardDescription>
								{locales.pages.about.myStory.paragraph1}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-muted-foreground'>
								{locales.pages.about.myStory.paragraph2}
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>{locales.pages.about.philosophyTitle}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-muted-foreground'>
								{locales.pages.about.myStory.paragraph3}
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>{locales.pages.about.interestsTitle}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-muted-foreground'>
								{locales.pages.about.myStory.paragraph4}
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>{locales.pages.about.disciplinesTitle}</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className='list-disc pl-6 space-y-2'>
								{locales.pages.about.disciplines.map((discipline, index) => (
									<li key={index} className='text-muted-foreground'>
										{discipline}
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>{locales.pages.about.examplesTitle}</CardTitle>
							<CardDescription>
								{locales.pages.about.examplesDescription}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className='list-disc pl-6 space-y-2'>
								{locales.pages.about.examples.map((example, index) => (
									<li key={index} className='text-muted-foreground'>
										{example}
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
