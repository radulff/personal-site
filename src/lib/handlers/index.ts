import { redirect, type Handle, type HandleServerError } from '@sveltejs/kit'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from 'CONSTANTS'

/**
 * @author Raül Vila <info@raul-vila.com> `2023/05/25`
 *
 * @description
 * Handle function for every server request. Set the user's preferred-lang into a cookie
 * based on their Accepted-Language cookie. If the user's Accepted-Language cookie is not
 * available, the preferred language cookie is set with the default language.
 */
export const handlePreferredLang: Handle = async ({ event, resolve }) => {
	const preferredLang = event.cookies.get('preferred-lang')
	if (preferredLang && SUPPORTED_LANGUAGES.includes(preferredLang)) {
		return await resolve(event)
	}
	const acceptLanguage = event.request.headers.get('Accept-Language')?.split(',') ?? []
	const userLang =
		SUPPORTED_LANGUAGES.find(x => acceptLanguage.some(y => y.includes(x))) ?? DEFAULT_LANGUAGE
	event.cookies.set('preferred-lang', userLang)
	return await resolve(event)
}

/**
 * @author Raül Vila <info@raul-vila.com> `2023/05/25`
 */
export const handleErrorRedirectToHomeIfPageNotFound: HandleServerError = ({ error, event }) => {
	if ((error as Error).message.includes('Not found')) {
		const prefixLang = event.cookies.get('preferred-lang') ?? ''
		throw redirect(303, prefixLang === DEFAULT_LANGUAGE ? '/' : '/' + prefixLang)
	}
}
