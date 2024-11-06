import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../../i18nConfig';
import { projectType } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';

export default async function ProjectDetails({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const locales = await getDictionary(lang);
	const portfolioText = locales.pages.about.developerPortfolio;

	return (
		<main className='min-h-screen relative'>
			{/* Background with gradient */}
			<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950 -z-10' />
			<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")] -z-10' />

			<div className='container mx-auto px-4 py-24'>
				<div className='max-w-4xl mx-auto space-y-12'>
					{/* Header Section */}
					<div className='text-center space-y-4'>
						<h1 className='text-4xl md:text-5xl font-bold text-black dark:text-white'>
							{portfolioText.main.title}
						</h1>
						<p className='text-black/80 dark:text-white/80 text-lg'>
							{portfolioText.expertise}
						</p>
					</div>

					{/* Projects Section */}
					<section>
						<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
							<CardContent className='p-6 space-y-8'>
								<h2 className='text-2xl font-bold text-black dark:text-white mb-6'>
									{portfolioText.projectsTitle}
								</h2>
								<div className='grid gap-6'>
									{portfolioText.projects.map((project: projectType) => (
										<div
											key={project.id}
											className='p-6 rounded-lg bg-forest-50/50 dark:bg-forest-800/50 backdrop-blur-sm'>
											<h3 className='text-xl font-semibold text-black dark:text-white mb-3'>
												{project.title}
											</h3>
											<p className='text-black/80 dark:text-white/80 mb-2'>
												{project.description}
											</p>
											<p className='text-black/60 dark:text-white/60 mb-4'>
												{project.details}
											</p>
											{project.skills && (
												<div className='space-y-2'>
													<p className='text-sm font-medium text-black dark:text-white'>
														{portfolioText.skillsTitle}:
													</p>
													<div className='flex flex-wrap gap-2'>
														{project.skills.map((skill, index) => (
															<span
																key={index}
																className='text-sm px-3 py-1 rounded-full bg-forest-100 dark:bg-forest-700/50 text-black/80 dark:text-white/80'>
																{skill}
															</span>
														))}
													</div>
												</div>
											)}
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</section>

					{/* Skills Section */}
					<section>
						<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
							<CardContent className='p-6 space-y-6'>
								<h2 className='text-2xl font-bold text-black dark:text-white'>
									{portfolioText.skillsTitle}
								</h2>
								<div className='grid md:grid-cols-2 gap-4'>
									{portfolioText.skills.map((skill, i) => (
										<div
											key={i}
											className='p-4 rounded-lg bg-forest-50/50 dark:bg-forest-800/50 backdrop-blur-sm'>
											<p className='text-black/80 dark:text-white/80'>
												{skill}
											</p>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</section>

					{/* Background Section */}
					<section>
						<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
							<CardContent className='p-6 space-y-4'>
								<h2 className='text-2xl font-bold text-black dark:text-white'>
									{portfolioText.background}
								</h2>
								<p className='text-black/80 dark:text-white/80'>
									{portfolioText.approach}
								</p>
							</CardContent>
						</Card>
					</section>
				</div>
			</div>
		</main>
	);
}
