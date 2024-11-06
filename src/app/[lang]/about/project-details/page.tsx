import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../../i18nConfig';
import { projectType } from '@/lib/types';

export default async function ProjectDetails({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const locales = await getDictionary(lang);
	const portfolioText = locales.pages.about.developerPortfolio;

	return (
		<main className='py-8'>
			<div className='container mx-auto'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-3xl font-bold mb-4'>
						{portfolioText.main.title}
					</h1>
					<p className='text-gray-500 mb-8'>{portfolioText.expertise}</p>
					<section className='mb-8'>
						<h2 className='text-xl font-bold mb-4'>
							{portfolioText.projectsTitle}
						</h2>
						<ul className='list-disc list-inside'>
							{portfolioText.projects.map((project: projectType) => (
								<li key={project.id} className='mb-4'>
									<h3 className='font-semibold'>{project.title}</h3>
									<p className='ml-4 text-gray-600'>{project.description}</p>
									<p className='ml-4 text-gray-500'>{project.details}</p>
									{project.skills && (
										<div className='ml-4 mt-2'>
											<p className='text-sm font-medium'>
												{portfolioText.skillsTitle}:
											</p>
											<div className='flex flex-wrap gap-2'>
												{project.skills.map((skill, index) => (
													<span
														key={index}
														className='text-sm bg-gray-100 px-2 py-1 rounded'>
														{skill}
													</span>
												))}
											</div>
										</div>
									)}
								</li>
							))}
						</ul>
					</section>
					<section>
						<h2 className='text-xl font-bold mb-4'>
							{portfolioText.skillsTitle}
						</h2>
						<div className='grid grid-cols-2 gap-4'>
							{portfolioText.skills.map((skill, i) => (
								<div key={i} className='bg-gray-100 p-4 rounded-lg shadow'>
									<p className='text-gray-500'>{skill}</p>
								</div>
							))}
						</div>
					</section>
					<section className='mt-8'>
						<h2 className='text-xl font-bold mb-4'>
							{portfolioText.background}
						</h2>
						<p className='text-gray-500'>{portfolioText.approach}</p>
					</section>
				</div>
			</div>
		</main>
	);
}
