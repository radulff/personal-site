'use client';

import { useEffect } from 'react';

const Recaptcha = () => {
	const isLocalhost =
		typeof window !== 'undefined' &&
		(window.location.hostname === 'localhost' ||
			window.location.hostname === '127.0.0.1');

	useEffect(() => {
		if (isLocalhost) {
			console.log('Recaptcha disabled in localhost');
			return;
		}

		const script = document.createElement('script');
		script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, [isLocalhost]);

	return null;
};

export default Recaptcha;
