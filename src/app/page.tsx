import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="relative items-center flex flex-col min-h-screen bg-gray-200 m-auto">
			<div className="w-[400px] m-auto text-center flex flex-col items-center">
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
				<Link href="/links">
					<button className="border-black border-2 rounded px-5 py-2 mt-10 text-black hover:text-white hover:bg-black">
						Links
					</button>
				</Link>
			</div>
		</div>
	);
}
