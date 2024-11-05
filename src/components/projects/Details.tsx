// components/projects/Details.tsx
import React from 'react';
import { projectType } from '@/lib/types';

type ProjectDetailsProps = {
  project: projectType;
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <main className="py-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-500 mb-8">{project.description}</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Project Details</h2>
            <ul className="list-disc list-inside">
              {project.details.split('\n').map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {project.skills.map((skill, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                  <p className="text-gray-500">{skill}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
