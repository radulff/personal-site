import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../app/globals.css';
import { i18n, type Locale } from '../../../i18nConfig';
import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';
import { getDictionary } from '@/lib/getDictionary';
import logo from '../../../public/logo.png';
import favicon from '../favicon.ico';

export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }));
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: 'Raül Vila | Software Engineer & Consultant',
		template: '%s | Raül Vila'
	},
	description:
		'Software Engineer, Consultant, and Digital Entrepreneur specializing in web development, blockchain technology, and digital transformation.',
	keywords: [
		'Software Engineer',
		'Web Development',
		'Blockchain',
		'Consultant',
		'Digital Transformation',
		'React',
		'Next.js',
		'TypeScript',
		'Web3',
		'Cryptocurrency'
	],
	authors: [{ name: 'Raül Vila' }],
	creator: 'Raül Vila',
	publisher: 'Raül Vila',
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
		locale: 'en_US',
		url: 'https://raulvila.com',
		siteName: 'Raül Vila',
		title: 'Raül Vila | Software Engineer & Consultant',
		description:
			'Software Engineer, Consultant, and Digital Entrepreneur specializing in web development, blockchain technology, and digital transformation.',
		images: [
			{
				url: '../../../public/logo.png',
				width: 1200,
				height: 630,
				alt: 'Raül Vila'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Raül Vila | Software Engineer & Consultant',
		description:
			'Software Engineer, Consultant, and Digital Entrepreneur specializing in web development, blockchain technology, and digital transformation.',
		creator: '@_radulff',
		images: ['../../../public/logo.png']
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
	// verification: {
	// 	google: 'your-google-site-verification' // Add your Google verification code
	// },
	category: 'technology'
};

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
		<html lang={lang}>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='canonical' href='https://raulvila.com' />
			</head>
			<body className={inter.className}>
				<Header locales={dictionary.layout.header} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
