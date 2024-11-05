'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { i18n } from '../../../i18nConfig';
import { usePathname, useRouter } from 'next/navigation';

const Footer: React.FC = () => {
	const router = useRouter();
	const pathName = usePathname();

	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');
		segments[1] = locale;
		return segments.join('/');
	};

	return (
		<footer className='w-full px-6 py-4'>
			<div className='max-w-screen-2xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4'>
				{/* Language Switcher - Left on desktop, top on mobile */}
				<div className='order-1 md:order-1'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='outline' size='sm' className='h-7 w-16'>
								{i18n.locales.find(locale =>
									pathName?.startsWith(`/${locale}`)
								) || 'EN'}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='center' className='w-16'>
							{i18n.locales.map(locale => (
								<DropdownMenuItem
									key={locale}
									onClick={() => router.push(redirectedPathName(locale))}>
									{locale.toUpperCase()}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				{/* Social Links - Center */}
				<div className='flex justify-center gap-4 order-2 md:order-2'>
					<Button variant='ghost' size='icon' asChild>
						<a
							href='https://linkedin.com/in/raulvila'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='LinkedIn'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								className='fill-current'>
								<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
							</svg>
						</a>
					</Button>
					<Button variant='ghost' size='icon' asChild>
						<a
							href='https://x.com/_radulff'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Twitter'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								className='fill-current'>
								<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
							</svg>
						</a>
					</Button>
					<Button variant='ghost' size='icon' asChild>
						<a
							href='https://github.com/radulff'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								className='fill-current'>
								<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
							</svg>
						</a>
					</Button>
					<Button variant='ghost' size='icon' asChild>
						<a
							href='https://gitlab.com/radulff'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitLab'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								className='fill-current'>
								<path d='M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z' />
							</svg>
						</a>
					</Button>
				</div>

				{/* Copyright - Right on desktop, bottom on mobile */}
				<div className='order-3 md:order-3 text-sm text-muted-foreground'>
					Copyright 2024 Raül Vila©
				</div>
			</div>
		</footer>
	);
};

export default Footer;