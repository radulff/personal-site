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
		<div className='min-h-screen'>
			<Recaptcha />

			{/* Hero Section with Form */}
			<section className='relative'>
				{/* Background with gradient */}
				<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950 -z-10' />
				<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")] -z-10' />

				<div className='container mx-auto px-4 py-12 md:py-24'>
					<div className='grid lg:grid-cols-2 gap-12 items-start'>
						{/* Left Column - Text Content */}
						<div className='space-y-8'>
							<div className='max-w-xl'>
								<h1 className='text-4xl md:text-5xl font-bold text-black dark:text-white mb-4'>
									{t.title}
								</h1>
								<p className='text-lg text-black/80 dark:text-white/80 mb-8'>
									{t.subtitle}
								</p>
								<Card className='bg-white/50 dark:bg-forest-900/50 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
									<CardHeader>
										<CardTitle className='text-black dark:text-white'>
											{t.contactMe.title}
										</CardTitle>
										<CardDescription className='text-black/70 dark:text-white/70'>
											{t.contactMe.description1}
										</CardDescription>
									</CardHeader>
									<CardContent className='space-y-4'>
										<p className='text-black/70 dark:text-white/70'>
											{t.contactMe.description2}
										</p>
									</CardContent>
								</Card>
							</div>
						</div>

						{/* Right Column - Contact Form */}
						<div className='lg:sticky lg:top-8'>
							<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
								<CardContent className='p-6'>
									<ContactForm extraclass='w-full' locales={t.form} />
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Calendar Section */}
			<section className='bg-gradient-to-b from-forest-50 to-white dark:from-forest-900 dark:to-forest-950 py-16'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-3xl font-bold text-black dark:text-white mb-8 text-center'>
							{t.contactMe.embedDescription}
						</h2>
						<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
							<CardContent className='p-6'>
								<CalendarEmbed title={t.contactMe.embedDescription} />
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
}
