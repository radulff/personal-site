import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import data from './data.json';
import { Locale } from '../../../../i18nConfig';

interface Badge {
	type: 'new' | 'discount' | 'opportunity';
	text: string;
	icon: string;
}

interface LinkItem {
	href: string;
	title: string;
	subtitle: string;
	logo?: string;
	badges?: Badge[];
}

interface Social {
	href: string;
	title: string;
	icon: string;
}

interface LocaleData {
	profile: {
		name: string;
		title: string;
		subtitle: string;
	};
	links: LinkItem[];
	socials: Social[];
}

const getBadgeStyles = (type: 'new' | 'discount' | 'opportunity') => {
	switch (type) {
		case 'new':
			return 'bg-forest-100 dark:bg-forest-900 text-forest-800 dark:text-forest-100';
		case 'discount':
			return 'bg-forest-100 dark:bg-forest-900 text-forest-800 dark:text-forest-100';
		case 'opportunity':
			return 'bg-forest-100 dark:bg-forest-900 text-forest-800 dark:text-forest-100';
		default:
			return 'bg-forest-100 dark:bg-forest-900 text-forest-800 dark:text-forest-100';
	}
};

export default async function Links({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const localeData = data[lang as keyof typeof data] as LocaleData;

	return (
		<div className='min-h-screen relative'>
			{/* Background with gradient */}
			<div className='absolute inset-0 bg-gradient-to-b from-forest-50 via-white to-forest-50 dark:from-forest-950 dark:via-forest-900 dark:to-forest-950 -z-10' />
			<div className='absolute inset-0 opacity-20 bg-[url("/grid-pattern.svg")] -z-10' />

			<div className='max-w-2xl mx-auto px-4 py-24 space-y-8'>
				{/* Profile Section */}
				<div className='text-center space-y-4'>
					<h1 className='text-2xl font-bold text-black dark:text-white'>
						{localeData.profile.name}
					</h1>
					<p className='text-black/80 dark:text-white/80'>
						{localeData.profile.title}
					</p>
					<p className='text-sm text-black/60 dark:text-white/60'>
						{localeData.profile.subtitle}
					</p>
				</div>

				{/* Links Section */}
				<div className='space-y-4'>
					{localeData.links.map((link: LinkItem) => (
						<Card
							key={link.href}
							className='hover:scale-105 transition-all duration-300 bg-white/50 dark:bg-forest-900/50 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
							<CardContent className='p-4'>
								<Button
									variant='ghost'
									asChild
									className='w-full justify-between group'>
									<a
										href={link.href}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-3'>
										<div className='flex items-center gap-3 flex-1'>
											{link.logo && (
												<div className='w-10 h-10 relative flex-shrink-0'>
													<Image
														src={link.logo}
														alt={link.title}
														fill
														className='object-contain rounded-sm'
													/>
												</div>
											)}
											<div className='text-left'>
												<div className='font-medium text-black dark:text-white'>
													{link.title}
												</div>
												<div className='text-sm text-black/70 dark:text-white/70'>
													{link.subtitle}
												</div>
											</div>
										</div>
										{link.badges && link.badges.length > 0 && (
											<div className='flex gap-2'>
												{link.badges.map((badge: Badge, index: number) => (
													<span
														key={index}
														className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getBadgeStyles(
															badge.type
														)}`}>
														{badge.icon} {badge.text}
													</span>
												))}
											</div>
										)}
									</a>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
