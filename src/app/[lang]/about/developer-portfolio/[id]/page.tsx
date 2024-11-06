'use client';

import { useEffect, useState } from 'react';
import { projectType } from '@/lib/types';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type ProjectPageProps = {
	params: { lang: string; id: string };
};

const ProjectPage: React.FC<ProjectPageProps> = ({
	params
}: ProjectPageProps) => {
	const [project, setProject] = useState<projectType | null>(null);
	const [dictionary, setDictionary] = useState<any>(null);
	const { lang, id } = params;

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch project data
				const projectResponse = await fetch(`/api/projects/${id}`, {
					headers: {
						'x-language': lang
					}
				});
				if (!projectResponse.ok) throw new Error('Failed to fetch project');
				const projectData = await projectResponse.json();
				setProject(projectData);

				// Fetch dictionary
				const dictionaryResponse = await fetch(`/api/dictionary?lang=${lang}`);
				if (!dictionaryResponse.ok)
					throw new Error('Failed to fetch dictionary');
				const dictionaryData = await dictionaryResponse.json();
				setDictionary(dictionaryData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [lang, id]);

	if (!project || !dictionary) {
		return (
			<div className='min-h-screen relative'>
				<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950 -z-10' />
				<div className='container mx-auto px-4 py-24'>
					<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
						<CardContent className='flex flex-col items-center justify-center min-h-[400px]'>
							<p className='text-black/60 dark:text-white/60'>
								{dictionary?.pages?.about?.developerPortfolio?.loadingProject ||
									'Loading project details...'}
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}

	const portfolioText = dictionary.pages.about.developerPortfolio;

	return (
		<main className='min-h-screen relative'>
			<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950 -z-10' />
			<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")] -z-10' />

			<div className='container mx-auto px-4 py-24'>
				<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
					<CardHeader>
						<CardTitle className='text-black dark:text-white'>
							{project.title}
						</CardTitle>
						<CardDescription className='text-black/70 dark:text-white/70'>
							{project.description}
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-8'>
						<div className='grid gap-8 md:grid-cols-2'>
							{project.technologies && (
								<div className='p-6 rounded-lg bg-forest-50/50 dark:bg-forest-800/50 backdrop-blur-sm'>
									<h3 className='font-semibold mb-4 text-black dark:text-white'>
										{portfolioText.technologiesUsed}
									</h3>
									<ul className='space-y-2'>
										{project.technologies.map((tech, index) => (
											<li
												key={index}
												className='text-black/80 dark:text-white/80 flex items-center'>
												<span className='mr-2'>•</span>
												{tech}
											</li>
										))}
									</ul>
								</div>
							)}
							{project.features && (
								<div className='p-6 rounded-lg bg-forest-50/50 dark:bg-forest-800/50 backdrop-blur-sm'>
									<h3 className='font-semibold mb-4 text-black dark:text-white'>
										{portfolioText.keyFeatures}
									</h3>
									<ul className='space-y-2'>
										{project.features.map((feature, index) => (
											<li
												key={index}
												className='text-black/80 dark:text-white/80 flex items-center'>
												<span className='mr-2'>•</span>
												{feature}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>

						{project.link && (
							<div className='flex justify-center pt-4'>
								<Button
									className='bg-forest-600 hover:bg-forest-700 text-white'
									asChild>
									<Link
										href={project.link}
										target='_blank'
										rel='noopener noreferrer'>
										{portfolioText.viewProject}
									</Link>
								</Button>
							</div>
						)}
					</CardContent>
				</Card>
			</div>
		</main>
	);
};

export default ProjectPage;
