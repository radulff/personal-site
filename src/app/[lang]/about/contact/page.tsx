import Recaptcha from '@/components/contact/Recaptcha';
import ContactForm from '@/components/contact/ContactForm';
import CalendarEmbed from '@/components/contact/CalendarEmbed';
import { Locale } from '../../../../../i18nConfig';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { getDictionary } from '@/lib/getDictionary';

export default async function Contact({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const t = dictionary.pages.about.contact;

	return (
		<div className='min-h-screen bg-background'>
			<Recaptcha />

			{/* Hero Section with Form */}
			<section className='container mx-auto px-4 py-12 md:py-24'>
				<div className='grid lg:grid-cols-2 gap-12 items-start'>
					{/* Left Column - Text Content */}
					<div className='space-y-6'>
						<div className='max-w-xl'>
							<h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
								{t.title}
							</h1>
							<p className='text-lg text-muted-foreground mb-6'>{t.subtitle}</p>
							<Card>
								<CardHeader>
									<CardTitle>{t.contactMe.title}</CardTitle>
									<CardDescription>{t.contactMe.description1}</CardDescription>
								</CardHeader>
								<CardContent className='space-y-4'>
									<p className='font-semibold'>{t.contactMe.email}</p>
									<p className='text-muted-foreground'>
										{t.contactMe.description2}
									</p>
								</CardContent>
							</Card>
						</div>
					</div>

					{/* Right Column - Contact Form */}
					<div className='lg:sticky lg:top-8'>
						<ContactForm extraclass='w-full' locales={t.form} />
					</div>
				</div>
			</section>

			{/* Calendar Section */}
			<section className='bg-muted py-12 md:py-24'>
				<div className='container mx-auto px-4'>
					<CalendarEmbed title={t.contactMe.embedDescription} />
				</div>
			</section>
		</div>
	);
}
