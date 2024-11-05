'use client';

import { useEffect, useState } from 'react';
import ProjectDetails from '@/components/projects/Details';
import { projectType } from '@/lib/types';
import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../../../i18nConfig';
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
	const { lang, id } = params;

	useEffect(() => {
		const fetchProject = async () => {
			const locales = await getDictionary(lang as Locale);
			const foundProject = locales.pages.about.developerPortfolio.projects.find(
				(project: projectType) => project.id.toString() === id
			);
			setProject(foundProject!);
		};

		fetchProject();
	}, [lang, id]);

	if (!project) {
		return (
			<div className='container mx-auto px-4 py-12'>
				<Card>
					<CardContent className='flex flex-col items-center justify-center min-h-[400px]'>
						<p className='text-muted-foreground'>Loading project details...</p>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<main className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-12'>
				<Card>
					<CardHeader>
						<CardTitle>{project.title}</CardTitle>
						<CardDescription>{project.description}</CardDescription>
					</CardHeader>
					{/* <CardContent className='space-y-6'>
						<div className='grid gap-4 md:grid-cols-2'>
							<div>
								<h3 className='font-semibold mb-2'>Technologies Used</h3>
								<ul className='list-disc list-inside text-muted-foreground'>
									{project.technologies?.map((tech, index) => (
										<li key={index}>{tech}</li>
									))}
								</ul>
							</div>
							<div>
								<h3 className='font-semibold mb-2'>Key Features</h3>
								<ul className='list-disc list-inside text-muted-foreground'>
									{project.features?.map((feature, index) => (
										<li key={index}>{feature}</li>
									))}
								</ul>
							</div>
						</div>

						{project.link && (
							<div className='flex justify-center pt-4'>
								<Button asChild>
									<Link href={project.link} target='_blank' rel='noopener noreferrer'>
										View Project
									</Link>
								</Button>
							</div>
						)}
					</CardContent> */}
				</Card>
			</div>
		</main>
	);
};

export default ProjectPage;