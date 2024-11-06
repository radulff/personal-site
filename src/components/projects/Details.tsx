// components/projects/Details.tsx
import React from 'react';
import { projectType } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';

type ProjectDetailsProps = {
	project: projectType;
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
	if (!project) {
		return (
			<div className='container mx-auto px-4 py-8'>
				<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
					<CardContent className='p-6'>
						<p className='text-black/60 dark:text-white/60'>Loading...</p>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<main className='py-24'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto space-y-8'>
					<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
						<CardContent className='p-6 space-y-6'>
							<h1 className='text-3xl font-bold text-black dark:text-white'>
								{project.title}
							</h1>
							<p className='text-black/80 dark:text-white/80'>
								{project.description}
							</p>

							<div className='space-y-4'>
								<h2 className='text-xl font-bold text-black dark:text-white'>
									Project Details
								</h2>
								<ul className='space-y-2'>
									{project.details.split('\n').map((detail, index) => (
										<li 
											key={index}
											className='text-black/80 dark:text-white/80 flex items-center'
										>
											<span className='mr-2'>•</span>
											{detail}
										</li>
									))}
								</ul>
							</div>

							<div className='space-y-4'>
								<h2 className='text-xl font-bold text-black dark:text-white'>
									Skills
								</h2>
								<div className='grid md:grid-cols-2 gap-4'>
									{project.skills.map((skill, index) => (
										<div 
											key={index} 
											className='p-4 rounded-lg bg-forest-50/50 dark:bg-forest-800/50 backdrop-blur-sm'
										>
											<p className='text-black/80 dark:text-white/80'>
												{skill}
											</p>
										</div>
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</main>
	);
};

export default ProjectDetails;
