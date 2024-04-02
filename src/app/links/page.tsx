import Image from 'next/image';
import { GitHubIcon, TwitterIcon, LinkCard, GitLabIcon } from './icons';
import data from './data.json';
import logo from '../../../public/white-logo.png';

export default async function Links() {
	return (
		<div className="flex items-center flex-col mx-auto w-full justify-center px-8 pb-4 text-black">
			<Image
				priority
				className="rounded-full"
				alt={data.name}
				src={logo}
				width={400}
				height={400}
			/>
			{/* <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1> */}
			{data.links.map((link) => (
				<LinkCard key={link.href} {...link} />
			))}
			<div className="flex items-center gap-4 mt-8 text-white">
				{data.socials.map((social) => (
					<a
						aria-label={`${social.title} link`}
						key={social.href}
						href={social.href}
						target="_blank"
						rel="noopener noreferrer">
						{social.href.includes('x') ? (
							<TwitterIcon />
						) : social.href.includes('github') ? (
							<GitHubIcon />
						) : social.href.includes('gitlab') ? (
							<GitLabIcon />
						) : null}
					</a>
				))}
			</div>
		</div>
	);
}
