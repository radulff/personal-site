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
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
			{locales.map(project => (
				<Card key={project.id} className='hover:shadow-lg transition-all'>
					<CardHeader>
						<CardTitle>{project.title}</CardTitle>
						<CardDescription>{project.description}</CardDescription>
					</CardHeader>
					<CardContent>
						{project.skills && (
							<div className='mb-4'>
								<div className='flex flex-wrap gap-2'>
									{project.skills.map((skill, index) => (
										<span
											key={index}
											className='px-2 py-1 bg-muted rounded-md text-sm text-muted-foreground'>
											{skill}
										</span>
									))}
								</div>
							</div>
						)}
						<Button
							variant='ghost'
							className='w-full group-hover:translate-x-1 transition-transform'
							asChild>
							<Link href={`/about/developer-portfolio/${project.id}`}>
								View Details →
							</Link>
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default ProjectsGrid;
