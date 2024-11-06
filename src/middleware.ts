import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n, Locale } from '../i18nConfig';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string {
	// First, try to get the locale from the pathname
	const pathname = request.nextUrl.pathname;
	const currentLocale = i18n.locales.find(
		locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (currentLocale) return currentLocale;

	// If no locale in pathname, try to get it from the cookie
	const localeCookie = request.cookies.get('NEXT_LOCALE');
	if (localeCookie && i18n.locales.includes(localeCookie.value as Locale)) {
		return localeCookie.value;
	}

	// If no cookie, use negotiator
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
	const locale = matchLocale(languages, i18n.locales, i18n.defaultLocale);

	return locale;
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	// Skip middleware for static files, API routes, and public folder
	if (
		pathname.startsWith('/_next') || // Next.js internal routes
		pathname.startsWith('/api') || // API routes
		pathname.startsWith('/public') || // Public folder
		pathname.includes('/images/') || // Images folder
		pathname.includes('.') || // Files with extensions (like favicon.ico, etc.)
		pathname === '/robots.txt' || // robots.txt
		pathname === '/sitemap.xml' // sitemap
	)
		return;

	// Check if the pathname already has a locale
	const pathnameHasLocale = i18n.locales.some(
		locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) {
		// If pathname has locale, set it in cookie for future requests
		const locale = pathname.split('/')[1];
		const response = NextResponse.next();
		response.cookies.set('NEXT_LOCALE', locale);
		return response;
	}

	// Get the locale (will preserve current locale if it exists in cookie)
	const locale = getLocale(request);

	// Create new URL with locale
	const newUrl = new URL(
		`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
		request.url
	);

	// Preserve search params
	newUrl.search = request.nextUrl.search;

	const response = NextResponse.redirect(newUrl);
	response.cookies.set('NEXT_LOCALE', locale);

	return response;
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|public).*)'
	]
};
