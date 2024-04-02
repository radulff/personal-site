import Image from 'next/image';

export default function Home() {
	return (
		<div className="relative items-center flex flex-wrap min-h-screen bg-gray-200">
			<div className="w-[400px] m-auto text-center">
				<div className="flex flex-col text-black">
					<h1 className="text-5xl font-bold">Welcome!</h1>
					<p className="py-6">Currently building the site. Stay tuned :)</p>
				</div>
				<Image
					src="/logo.png"
					alt="Raul Vila"
					width={300}
					height={300}
					className="inline-flex max-w-sm rounded-lg shadow-2xl"
				/>
			</div>
		</div>
	);
}
