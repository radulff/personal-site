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
			<div className='container mx-auto px-4 py-12'>
				<Card>
					<CardContent className='flex flex-col items-center justify-center min-h-[400px]'>
						<p className='text-muted-foreground'>
							{dictionary?.pages?.about?.developerPortfolio?.loadingProject ||
								'Loading project details...'}
						</p>
					</CardContent>
				</Card>
			</div>
		);
	}

	const portfolioText = dictionary.pages.about.developerPortfolio;

	return (
		<main className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-12'>
				<Card>
					<CardHeader>
						<CardTitle>{project.title}</CardTitle>
						<CardDescription>{project.description}</CardDescription>
					</CardHeader>
					<CardContent className='space-y-6'>
						<div className='grid gap-4 md:grid-cols-2'>
							{project.technologies && (
								<div>
									<h3 className='font-semibold mb-2'>
										{portfolioText.technologiesUsed}
									</h3>
									<ul className='list-disc list-inside text-muted-foreground'>
										{project.technologies.map((tech, index) => (
											<li key={index}>{tech}</li>
										))}
									</ul>
								</div>
							)}
							{project.features && (
								<div>
									<h3 className='font-semibold mb-2'>
										{portfolioText.keyFeatures}
									</h3>
									<ul className='list-disc list-inside text-muted-foreground'>
										{project.features.map((feature, index) => (
											<li key={index}>{feature}</li>
										))}
									</ul>
								</div>
							)}
						</div>

						{project.link && (
							<div className='flex justify-center pt-4'>
								<Button asChild>
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
