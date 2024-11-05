import React from 'react';
import { projectType } from 'libs/types';

type ProjectCardProps = {
	project: projectType;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<a
			href={`/projects/${project.id}`}
			className='group block border rounded-lg overflow-hidden hover:shadow-xl'>
			<img
				src={project.image}
				alt={project.title}
				className='w-full h-40 object-cover object-center group-hover:opacity-80'
			/>
			<div className='bg-white p-4'>
				<h3 className='text-lg font-bold mb-2'>{project.title}</h3>
				<p className='text-gray-500'>{project.description}</p>
			</div>
		</a>
	);
};

export default ProjectCard;
