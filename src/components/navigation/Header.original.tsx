'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink, 
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
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
		const onResize = () => {
			if (window.innerWidth > 768) setShowMenu(false);
		};
		const resizeObserver = new ResizeObserver(onResize);
		resizeObserver.observe(document.body);
		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	const toggleMenu = () => setShowMenu(!showMenu);

	const navItems = [
		{ path: '/', label: locales.navElements.home },
		{ path: '/business', label: locales.navElements.business },
		{ path: '/individuals', label: locales.navElements.individuals },
		{ path: '/about', label: locales.navElements.about },
		{ path: '/links', label: locales.navElements.links }
	];

	// Only render logo after mounting to avoid hydration mismatch
	if (!mounted) {
		return null;
	}

	return (
		<header className='sticky top-0 z-50 w-full bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-b border-forest-100 dark:border-forest-800'>
			<nav className='container mx-auto grid md:h-24 h-16 md:grid-cols-[1fr,max-content,1fr] grid-cols-[1fr,max-content,max-content] content-center'>
				<Button
					variant='ghost'
					asChild
					className='flex md:w-48 w-32 md:p-4 p-3 hover:bg-forest-50 dark:hover:bg-forest-800/50'>
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

				<NavigationMenu className='hidden md:flex'>
					<NavigationMenuList>
						{navItems.map(item => (
							<NavigationMenuItem key={item.path}>
								<Link href={item.path} legacyBehavior passHref>
									<NavigationMenuLink
										className={
											navigationMenuTriggerStyle() +
											' text-black dark:text-white hover:bg-forest-50 dark:hover:bg-forest-800/50'
										}>
										{item.label}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				{/* Mobile Menu */}
				<div className='md:hidden'>
					{showMenu && (
						<div className='absolute top-16 left-0 w-full bg-white/95 dark:bg-forest-900/95 backdrop-blur-sm z-50'>
							<nav className='flex flex-col p-4 border-t border-forest-100 dark:border-forest-800'>
								{navItems.map(item => (
									<Button
										key={item.path}
										variant='ghost'
										asChild
										className='w-full justify-start text-black dark:text-white hover:bg-forest-50 dark:hover:bg-forest-800/50'
										onClick={() => setShowMenu(false)}>
										<Link href={item.path}>{item.label}</Link>
									</Button>
								))}
							</nav>
						</div>
					)}
				</div>

				<div className='flex items-center gap-4 justify-end'>
					<Button
						variant='default'
						asChild
						className='bg-forest-600 hover:bg-forest-700 text-white'>
						<Link href={'/about/contact'}>{locales.cta}</Link>
					</Button>

					<Button
						variant='ghost'
						size='icon'
						className='md:hidden hover:bg-forest-50 dark:hover:bg-forest-800/50'
						onClick={toggleMenu}>
						<svg
							width='15'
							height='15'
							viewBox='0 0 15 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='text-black dark:text-white'>
							<path
								d='M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z'
								fill='currentColor'
								fillRule='evenodd'
								clipRule='evenodd'></path>
						</svg>
					</Button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
