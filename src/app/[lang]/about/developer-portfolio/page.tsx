import ProjectsGrid from '@/components/projects/Grid';
import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../../i18nConfig';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

export default async function DeveloperPortfolio({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const locales = await getDictionary(lang);
	const portfolioText = locales.pages.about.developerPortfolio;

	return (
		<main className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative'>
				{/* Background with gradient */}
				<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950 -z-10' />
				<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")] -z-10' />

				<div className='container px-4 py-24 md:py-32'>
					<div className='flex flex-col items-center space-y-6 text-center'>
						<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white'>
							{portfolioText.main.title}
						</h1>
						<p className='mx-auto max-w-[700px] text-black/80 dark:text-white/80 text-lg md:text-xl'>
							{portfolioText.expertise}
						</p>
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className='bg-gradient-to-b from-white to-forest-50 dark:from-forest-950 dark:to-forest-900'>
				<div className='container px-4 py-24'>
					<ProjectsGrid locales={portfolioText.projects} />
				</div>
			</section>

			{/* Skills Section */}
			<section className='bg-gradient-to-b from-forest-50 to-white dark:from-forest-900 dark:to-forest-950 py-24'>
				<div className='container px-4'>
					<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
						<CardHeader>
							<CardTitle className='text-black dark:text-white'>
								{portfolioText.skillsTitle}
							</CardTitle>
							<CardDescription className='text-black/70 dark:text-white/70'>
								{portfolioText.background}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
								{portfolioText.skills.map((skill, index) => (
									<div
										key={index}
										className='p-4 rounded-lg bg-forest-50/50 dark:bg-forest-800/50 backdrop-blur-sm'>
										<p className='text-black/80 dark:text-white/80'>{skill}</p>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}
