'use client';

import { useEffect } from 'react';

const Recaptcha = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	return null;
};

export default Recaptcha;
