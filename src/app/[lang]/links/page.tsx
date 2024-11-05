import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import data from './data.json';

export default async function Links() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 px-4'>
			<div className='max-w-2xl mx-auto space-y-8'>
				{/* Profile Section */}
				<div className='text-center space-y-4'>
					<h1 className='text-2xl font-bold'>{data.name}</h1>
					<p className='text-gray-600'>{data.title}</p>
					<p className='text-sm text-gray-500'>{data.subtitle}</p>
				</div>

				{/* Links Section */}
				<div className='space-y-4'>
					{data.links.map(link => (
						<Card key={link.href} className='hover:shadow-md transition-shadow'>
							<CardContent className='p-4'>
								<Button
									variant='ghost'
									asChild
									className='w-full justify-start'>
									<a
										href={link.href}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-3'>
										{link.image && (
											<Image
												src={link.image}
												alt={link.title}
												width={24}
												height={24}
												className='rounded-sm'
											/>
										)}
										<span>{link.title}</span>
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
