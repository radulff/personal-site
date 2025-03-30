import Image from 'next/image';
import { Locale } from '../../../i18nConfig';
import { getDictionary } from '@/lib/getDictionary';
import { i18n } from '../../../i18nConfig';
import HomeClient from './HomeClient';
export default async function Home({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const currentLocale = i18n.locales.find(locale => lang === locale) || 'en';
	const alternateLocale = currentLocale === 'en' ? 'es' : 'en';

	return (
		<HomeClient
			dictionary={dictionary}
			currentLocale={currentLocale}
			alternateLocale={alternateLocale}
		/>
	);
}
