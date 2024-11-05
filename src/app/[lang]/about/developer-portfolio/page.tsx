import ProjectsGrid from '@/components/projects/Grid';
import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../../i18nConfig';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

export default async function DeveloperPortfolio({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const locales = await getDictionary(lang);

	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center space-y-4 text-center'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							{locales.pages.about.developerPortfolio.main.title}
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
							Showcasing my technical projects and development work
						</p>
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className='container px-4 md:px-6 py-12'>
				<ProjectsGrid
					locales={locales.pages.about.developerPortfolio.projects}
				/>
			</section>

			{/* Skills Section */}
			{/* <section className='bg-muted py-12 md:py-24'>
				<div className='container px-4 md:px-6'>
					<Card>
						<CardHeader>
							<CardTitle>{locales.pages.about.developerPortfolio.skillsTitle}</CardTitle>
							<CardDescription>
								{locales.pages.about.developerPortfolio.expertise}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
								{locales.pages.about.developerPortfolio.skills.map((skill, index) => (
									<div key={index} className='space-y-2'>
										<p className='text-muted-foreground'>{skill}</p>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</section> */}
		</main>
	);
}
