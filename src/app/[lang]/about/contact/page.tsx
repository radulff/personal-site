import Cal from '@calcom/embed-react';
import Recaptcha from '@/components/contact/Recaptcha';
import ContactForm from '@/components/contact/ContactForm';
import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '../../../../../i18nConfig';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

export default async function Contact({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const locales = await getDictionary(lang);

	return (
		<div className='min-h-screen'>
			<Recaptcha />

			{/* Hero Section */}
			<section className='max-w-screen-2xl mx-auto px-4 md:px-16 py-12 md:py-24'>
				<div className='grid lg:grid-cols-2 gap-12 items-start'>
					<div className='space-y-6'>
						<h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
							{locales.pages.about.contact.title}
						</h1>
						<p className='text-lg text-muted-foreground'>
							{locales.pages.about.contact.subtitle}
						</p>
					</div>
					<ContactForm
						extraclass='w-full'
						locales={locales.pages.about.contact.form}
					/>
				</div>
			</section>

			{/* Contact Info Section */}
			<section className='bg-muted py-12 md:py-24'>
				<div className='container mx-auto px-4'>
					<div className='grid lg:grid-cols-2 gap-12'>
						<Card>
							<CardHeader>
								<CardTitle>
									{locales.pages.about.contact.contactMe.title}
								</CardTitle>
								<CardDescription>
									{locales.pages.about.contact.contactMe.description1}
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<p className='font-semibold'>
									{locales.pages.about.contact.contactMe.email}
								</p>
								<p className='text-muted-foreground'>
									{locales.pages.about.contact.contactMe.description2}
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>
									{locales.pages.about.contact.contactMe.embedDescription}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='w-full h-[400px] rounded-lg overflow-hidden'>
									<Cal
										calLink='rick/get-rick-rolled'
										style={{ width: '100%', height: '100%', border: 'none' }}
									/>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
}
