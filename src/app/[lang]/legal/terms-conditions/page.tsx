import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../../i18nConfig';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function TermsConditions({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const t = dictionary.pages.legal.terms;

	return (
		<main className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-12 md:py-24'>
				<Card>
					<CardHeader>
						<CardTitle className='text-3xl'>{t.title}</CardTitle>
					</CardHeader>
					<CardContent className='space-y-6'>
						<div className='space-y-4'>
							<h2 className='text-xl font-semibold'>
								{t.sections.formUsage.title}
							</h2>
							<p className='text-muted-foreground'>
								{t.sections.formUsage.description}
							</p>
							<ul className='list-disc pl-6 text-muted-foreground'>
								{t.sections.formUsage.conditions.map(
									(condition: string, index: number) => (
										<li key={index}>{condition}</li>
									)
								)}
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-xl font-semibold'>
								{t.sections.responseTime.title}
							</h2>
							<p className='text-muted-foreground'>
								{t.sections.responseTime.description}
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-xl font-semibold'>
								{t.sections.content.title}
							</h2>
							<p className='text-muted-foreground'>
								{t.sections.content.description}
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
