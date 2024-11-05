import { dev } from '$app/environment'

/**
 * @author Raül Vila <info@raul-vila.com> `2022/12/26` updated at `2023/05/24`
 *
 * @description
 *  > ** Note **
 * > Google reCAPTCHA doesn't work on localhost. If SvelteKit is in
 * > development mode, this function always returns true if both parameters are passed.
 *
 * Checking if the reponse sent by reCaptcha success or not and if the score is above 0.5
 * In ReCaptcha v3, a score sent which tells if the data sent from front end is from Human or from Bots.
 * If score above 0.5 then it is human otherwise it is bot
 * For more info check, https://developers.google.com/recaptcha/docs/v3
 *
 * {
 *  "success": true|false,      // whether this request was a valid reCAPTCHA token for your site
 *  "score": number             // the score for this request (0.0 - 1.0)
 *  "action": string            // the action name for this request (important to verify)
 *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
 *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
 *  "error-codes": [...]        // optional
 * }
 *
 * Please put this code `import { handlerRepaptchaApiRoute } from '../../libs';export default handlerRepaptchaApiRoute`
 * inside `pages/api` for use.
 *
 */
export const isValidRecaptcha = async (key: string, token: string) => {
	try {
		if (dev && key && token) return true
		const response = await (
			await fetch(
				'https://www.google.com/recaptcha/api/siteverify?secret=' + key + '&response=' + token
			)
		).json()
		if (response.success && response.score >= 0.5) {
			return true
		} else {
			return false
		}
	} catch (error) {
		return false
	}
}
