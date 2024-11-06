import React from 'react';
import { Inter } from 'next/font/google';
import '../../app/globals.css';
import { i18n, type Locale } from '../../../i18nConfig';
import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';
import { getDictionary } from '@/lib/getDictionary';
import logo from '../../../public/logo.png';
import favicon from '../favicon.ico';
import { ThemeProvider } from '@/components/theme/theme-provider';

export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }));
}

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	const t = dictionary.metadata;

	return {
		metadataBase: new URL('https://raulvila.com'),
		title: {
			default: t.default.title,
			template: `%s | ${t.default.title.split('|')[0].trim()}`
		},
		description: t.default.description,
		keywords: t.default.keywords,
		authors: [{ name: t.default.author }],
		creator: t.default.creator,
		publisher: t.default.publisher,
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1
			}
		},
		openGraph: {
			type: 'website',
			locale: t.openGraph.locale,
			url: 'https://raulvila.com',
			siteName: t.openGraph.siteName,
			title: t.openGraph.title,
			description: t.openGraph.description,
			images: [
				{
					url: logo.src,
					width: 1200,
					height: 630,
					alt: t.openGraph.siteName
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title: t.twitter.title,
			description: t.twitter.description,
			creator: t.twitter.creator,
			images: [logo.src]
		},
		icons: {
			icon: [{ url: favicon.src }, { url: logo.src, type: 'image/png' }],
			apple: [{ url: logo.src }],
			other: [
				{
					rel: 'mask-icon',
					url: logo.src
				}
			]
		},
		manifest: '/site.webmanifest',
		alternates: {
			canonical: 'https://raulvila.com',
			languages: {
				'en-US': '/en',
				'es-ES': '/es'
			}
		},
		category: 'technology'
	};
}

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: { lang: Locale };
}>) {
	const lang = i18n.locales.includes(params.lang)
		? params.lang
		: i18n.defaultLocale;

	const dictionary = await getDictionary(lang);

	return (
		<html lang={lang} suppressHydrationWarning>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='canonical' href='https://raulvila.com' />
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<Header locales={dictionary.layout.header} />
					<div className='h-dvh'>{children}</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
