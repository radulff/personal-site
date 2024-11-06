'use client';

import Cal from '@calcom/embed-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CalendarEmbedProps {
	title: string;
}

const CalendarEmbed = ({ title }: CalendarEmbedProps) => {
	return (
		<Card className='bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm border-forest-100 dark:border-forest-800'>
			<CardHeader>
				<CardTitle className='text-black dark:text-white'>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='aspect-video w-full rounded-lg overflow-hidden'>
					<Cal
						calLink='raul-vila'
						style={{ width: '100%', height: '100%', border: 'none' }}
					/>
				</div>
			</CardContent>
		</Card>
	);
};

export default CalendarEmbed;
