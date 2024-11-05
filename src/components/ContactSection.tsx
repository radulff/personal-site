import React from 'react';

interface ContactSectionProps {
	text: string;
	contactInfo: string | React.ReactNode;
}

const ContactSection: React.FC<ContactSectionProps> = ({
	text,
	contactInfo
}) => (
	<section>
		<h2 className='text-xl font-bold mb-4'>Contact Me</h2>
		<p className='text-gray-500 mb-4'>{text}</p>
		<p className='text-gray-500 mb-4'>{contactInfo}</p>
	</section>
);

export default ContactSection;
