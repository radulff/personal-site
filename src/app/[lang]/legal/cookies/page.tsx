import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../../i18nConfig';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Cookies({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const t = dictionary.pages.legal.cookies;

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
								{t.sections.contactForm.title}
							</h2>
							<p className='text-muted-foreground'>
								{t.sections.contactForm.description}
							</p>
							<ul className='list-disc pl-6 text-muted-foreground'>
								{t.sections.contactForm.purposes.map(
									(purpose: string, index: number) => (
										<li key={index}>{purpose}</li>
									)
								)}
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-xl font-semibold'>
								{t.sections.thirdParty.title}
							</h2>
							<p className='text-muted-foreground'>
								{t.sections.thirdParty.description}
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-xl font-semibold'>
								{t.sections.control.title}
							</h2>
							<p className='text-muted-foreground'>
								{t.sections.control.description}
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
