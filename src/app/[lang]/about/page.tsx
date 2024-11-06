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
		<div className='min-h-screen relative'>
			{/* Background with gradient */}
			<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950 -z-10' />
			<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")] -z-10' />

			{/* Hero Section */}
			<section className='relative py-24'>
				<div className='container px-4'>
					<div className='flex flex-col items-center space-y-6 text-center'>
						<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white'>
							{locales.pages.about.title}
						</h1>
						<p className='mx-auto max-w-[700px] text-black/80 dark:text-white/80 text-lg md:text-xl'>
							{locales.pages.about.whoAmITitle}
						</p>
					</div>
				</div>
			</section>

			<section className='container px-4 pb-24'>
				<div className='grid gap-8 max-w-4xl mx-auto'>
					<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
						<CardHeader>
							<CardTitle className='text-black dark:text-white'>
								{locales.pages.about.whatIDoTitle}
							</CardTitle>
							<CardDescription className='text-black/70 dark:text-white/70'>
								{locales.pages.about.myStory.paragraph1}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-black/80 dark:text-white/80'>
								{locales.pages.about.myStory.paragraph2}
							</p>
						</CardContent>
					</Card>

					<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
						<CardHeader>
							<CardTitle className='text-black dark:text-white'>
								{locales.pages.about.philosophyTitle}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-black/80 dark:text-white/80'>
								{locales.pages.about.myStory.paragraph3}
							</p>
						</CardContent>
					</Card>

					<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
						<CardHeader>
							<CardTitle className='text-black dark:text-white'>
								{locales.pages.about.interestsTitle}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-black/80 dark:text-white/80'>
								{locales.pages.about.myStory.paragraph4}
							</p>
						</CardContent>
					</Card>

					<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
						<CardHeader>
							<CardTitle className='text-black dark:text-white'>
								{locales.pages.about.disciplinesTitle}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className='grid gap-2'>
								{locales.pages.about.disciplines.map((discipline, index) => (
									<li
										key={index}
										className='p-3 rounded-lg bg-forest-50/50 dark:bg-forest-800/50 backdrop-blur-sm text-black/80 dark:text-white/80'>
										{discipline}
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
						<CardHeader>
							<CardTitle className='text-black dark:text-white'>
								{locales.pages.about.examplesTitle}
							</CardTitle>
							<CardDescription className='text-black/70 dark:text-white/70'>
								{locales.pages.about.examplesDescription}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className='grid gap-2'>
								{locales.pages.about.examples.map((example, index) => (
									<li
										key={index}
										className='p-3 rounded-lg bg-forest-50/50 dark:bg-forest-800/50 backdrop-blur-sm text-black/80 dark:text-white/80'>
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
