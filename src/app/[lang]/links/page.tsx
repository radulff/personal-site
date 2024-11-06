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
			return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100';
		case 'discount':
			return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100';
		case 'opportunity':
			return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100';
		default:
			return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100';
	}
};

export default async function Links({
	params: { lang }
}: {
	params: { lang: Locale };
}) {
	const localeData = data[lang as keyof typeof data] as LocaleData;

	return (
		<div className='min-h-screen bg-background'>
			<div className='max-w-2xl mx-auto px-4 py-12 space-y-8'>
				{/* Profile Section */}
				<div className='text-center space-y-4'>
					<h1 className='text-2xl font-bold text-foreground'>
						{localeData.profile.name}
					</h1>
					<p className='text-muted-foreground'>{localeData.profile.title}</p>
					<p className='text-sm text-muted-foreground'>
						{localeData.profile.subtitle}
					</p>
				</div>

				{/* Links Section */}
				<div className='space-y-4'>
					{localeData.links.map((link: LinkItem) => (
						<Card key={link.href} className='hover:shadow-md transition-shadow'>
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
											{/* {link.logo && (
												<div className='w-10 h-10 relative flex-shrink-0'>
													<Image
														src={link.logo}
														alt={link.title}
														fill
														className='object-contain rounded-sm'
													/>
												</div>
											)} */}
											<div className='text-left'>
												<div className='font-medium text-foreground'>
													{link.title}
												</div>
												<div className='text-sm text-muted-foreground'>
													{link.subtitle}
												</div>
											</div>
										</div>
										{/* {link.badges && link.badges.length > 0 && (
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
										)} */}
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
