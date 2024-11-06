'use client';

import Cal from '@calcom/embed-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CalendarEmbedProps {
	title: string;
}

const CalendarEmbed = ({ title }: CalendarEmbedProps) => {
	return (
		<Card className='w-auto mx-auto h-auto'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
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
