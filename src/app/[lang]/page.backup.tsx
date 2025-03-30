import Image from 'next/image';
import { Locale } from '../../../i18nConfig';
import { getDictionary } from '@/lib/getDictionary';

export default async function Home({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const t = dictionary.pages.home;

	return (
		<main className='flex flex-col h-screen'>
			{/* Profile Section */}
			<section className='relative flex-1 flex items-center justify-center overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950' />
				<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")]' />

				<div className='relative container mx-auto px-4 flex flex-col items-center text-center z-10'>
					<div className='max-w-4xl mx-auto space-y-4'>
						<div className='relative mb-2'>
							<div className='absolute -inset-4 bg-gradient-to-r from-forest-400 to-forest-600 rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition-all'></div>
							<Image
								src='/images/RaulVila.png'
								alt='Raül Vila'
								width={120}
								height={120}
								className='relative rounded-lg mx-auto'
								priority
							/>
						</div>
						<h1 className='text-3xl md:text-5xl font-bold text-black dark:text-white'>
							{t.about.title}
						</h1>
						<p className='text-base md:text-lg text-black/80 dark:text-white/80 max-w-2xl mx-auto'>
							{t.about.description}
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
