import { projectType } from '@/lib/types';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type ProjectCardProps = {
	project: projectType;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<a
			href={`/projects/${project.id}`}
			className='block'>
			<Card className='group hover:scale-105 transition-all duration-300 bg-white/50 dark:bg-forest-900/50 backdrop-blur-sm border-forest-100 dark:border-forest-800 overflow-hidden'>
				{project.image && (
					<img
						src={project.image}
						alt={project.title}
						className='w-full h-40 object-cover object-center group-hover:opacity-80 transition-opacity'
					/>
				)}
				<CardContent className='p-6'>
					<h3 className='text-lg font-bold mb-2 text-black dark:text-white'>
						{project.title}
					</h3>
					<p className='text-black/80 dark:text-white/80'>
						{project.description}
					</p>
				</CardContent>
			</Card>
		</a>
	);
};

export default ProjectCard;
