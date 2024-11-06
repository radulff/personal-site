import React from 'react';
import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
	id: number;
	title: string;
	description: string;
	image?: string;
	details?: string;
	skills?: string[];
}

interface ProjectsGridProps {
	locales: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ locales }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
			{locales.map(project => (
				<Card 
					key={project.id} 
					className='group hover:scale-105 transition-all duration-300 bg-white/50 dark:bg-forest-900/50 backdrop-blur-sm border-forest-100 dark:border-forest-800'
				>
					<CardHeader>
						<CardTitle className='text-black dark:text-white'>
							{project.title}
						</CardTitle>
						<CardDescription className='text-black/70 dark:text-white/70'>
							{project.description}
						</CardDescription>
					</CardHeader>
					<CardContent>
						{project.skills && (
							<div className='mb-4'>
								<div className='flex flex-wrap gap-2'>
									{project.skills.map((skill, index) => (
										<span
											key={index}
											className='px-2 py-1 bg-forest-50/50 dark:bg-forest-800/50 backdrop-blur-sm rounded-md text-sm text-black/80 dark:text-white/80'>
											{skill}
										</span>
									))}
								</div>
							</div>
						)}
						<Button
							variant='ghost'
							className='w-full group-hover:text-black group-hover:bg-forest-50 dark:group-hover:text-white dark:group-hover:bg-forest-800/50'
							asChild>
							<Link href={`/about/developer-portfolio/${project.id}`}>
								View Details 
								<span className='ml-2 group-hover:translate-x-1 transition-transform'>→</span>
							</Link>
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default ProjectsGrid;
