import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '@/constants';

export const i18n = {
	defaultLocale: DEFAULT_LANGUAGE,
	locales: SUPPORTED_LANGUAGES
} as const;

export type Locale = (typeof i18n)['locales'][number];
