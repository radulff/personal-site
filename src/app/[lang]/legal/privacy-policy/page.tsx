import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../../i18nConfig';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function PrivacyPolicy({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const t = dictionary.pages.legal.privacy;

	return (
		<main className='min-h-screen relative'>
			<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950 -z-10' />
			<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")] -z-10' />

			<div className='container mx-auto px-4 py-24'>
				<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
					<CardHeader>
						<CardTitle className='text-3xl text-black dark:text-white'>
							{t.title}
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-8'>
						<div className='space-y-4'>
							<h2 className='text-xl font-semibold text-black dark:text-white'>
								{t.sections.dataCollection.title}
							</h2>
							<p className='text-black/80 dark:text-white/80'>
								{t.sections.dataCollection.description}
							</p>
							<ul className='space-y-2'>
								{t.sections.dataCollection.items.map(
									(item: string, index: number) => (
										<li 
											key={index}
											className='flex items-center text-black/80 dark:text-white/80'
										>
											<span className='mr-2'>•</span>
											{item}
										</li>
									)
								)}
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-xl font-semibold text-black dark:text-white'>
								{t.sections.dataUsage.title}
							</h2>
							<p className='text-black/80 dark:text-white/80'>
								{t.sections.dataUsage.description}
							</p>
							<ul className='space-y-2'>
								{t.sections.dataUsage.purposes.map(
									(purpose: string, index: number) => (
										<li 
											key={index}
											className='flex items-center text-black/80 dark:text-white/80'
										>
											<span className='mr-2'>•</span>
											{purpose}
										</li>
									)
								)}
							</ul>
						</div>

						<div className='p-6 rounded-lg bg-forest-50/50 dark:bg-forest-800/50 backdrop-blur-sm'>
							<h2 className='text-xl font-semibold text-black dark:text-white mb-4'>
								{t.sections.dataProtection.title}
							</h2>
							<p className='text-black/80 dark:text-white/80'>
								{t.sections.dataProtection.description}
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
