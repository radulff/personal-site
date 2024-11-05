import React from 'react';
import { useRouter } from 'next/router';
import ProjectCard from './ProjectCard';
import { projectType } from 'libs/types';

type ProjectsGridProps = {
  locales: projectType[];
};

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ locales }) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {locales.map((project) => (
        <div key={project.id} onClick={() => router.push(`/projects/${project.id}`)}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
