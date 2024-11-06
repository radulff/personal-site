'use client';

import Cal from '@calcom/embed-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CalendarEmbedProps {
	title: string;
}

const CalendarEmbed = ({ title }: CalendarEmbedProps) => {
	return (
		<Card className='max-w-4xl mx-auto'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='aspect-video w-full rounded-lg overflow-hidden'>
					<Cal
						calLink='rick/get-rick-rolled'
						style={{ width: '100%', height: '100%', border: 'none' }}
					/>
				</div>
			</CardContent>
		</Card>
	);
};

export default CalendarEmbed;
