'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import logo from '../../../public/images/logo.png';
import whiteLogo from '../../../public/images/white-logo.png';

interface LocaleNavElements {
	home: string;
	business: string;
	individuals: string;
	about: string;
	links: string;
}

interface Props {
	locales: {
		navElements: LocaleNavElements;
		cta: string;
	};
}

const Header: React.FC<Props> = ({ locales }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	// Only render logo after mounting to avoid hydration mismatch
	if (!mounted) {
		return null;
	}

	return (
		<header className='sticky top-0 z-50 w-full bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-b border-forest-100 dark:border-forest-800'>
			<nav className='container mx-auto h-16 flex items-center justify-center'>
				<Button
					variant='ghost'
					asChild
					className='flex w-32 p-3 hover:bg-forest-50 dark:hover:bg-forest-800/50'>
					<Link href={'/'}>
						<Image
							src={theme === 'dark' ? whiteLogo : logo}
							alt='Logo'
							width={150}
							height={150}
							className='aspect-1/1'
							priority
						/>
					</Link>
				</Button>
			</nav>
		</header>
	);
};

export default Header;
