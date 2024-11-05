import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../../i18nConfig';

export default async function ProjectDetails({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const locales = await getDictionary(lang);

	return (
		<main className='py-8'>
			<div className='container mx-auto'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-3xl font-bold mb-4'>
						{locales.pages.about.developerPortfolio.main.title}
					</h1>
					<p className='text-gray-500 mb-8'>
						{locales.pages.about.developerPortfolio.description}
					</p>
					{/* <section className='mb-8'>
						<h2 className='text-xl font-bold mb-4'>
							{locales.pages.about.developerPortfolio.projectsTitle}
						</h2>
						<ul className='list-disc list-inside'>
							{locales.pages.about.developerPortfolio.projects.map(project => (
								<li key={project.id}>{project.details}</li>
							))}
						</ul>
					</section>
					<section>
						<h2 className='text-xl font-bold mb-4'>
							{locales.pages.about.developerPortfolio.skillsTitle}
						</h2>
						<div className='grid grid-cols-2 gap-4'>
							{locales.pages.about.developerPortfolio.skills.map((skill, i) => (
								<div key={i} className='bg-gray-100 p-4 rounded-lg shadow'>
									<p className='text-gray-500'>{skill}</p>
								</div>
							))}
						</div>
					</section> */}
				</div>
			</div>
		</main>
	);
}
