import React from 'react';

interface ServiceCardProps {
	image: string;
	title: string;
	description: string;
	link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	image,
	title,
	description,
	link
}) => (
	<div className='bg-white shadow rounded-lg p-6'>
		<img
			src={image}
			alt={title}
			className='w-full h-40 object-cover mb-4 rounded-lg'
		/>
		<h3 className='text-xl font-bold mb-2'>{title}</h3>
		<p>{description}</p>
		<a href={link} className='btn btn-primary mt-4'>
			Learn More
		</a>
	</div>
);

export default ServiceCard;
