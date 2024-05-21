import route from '@/constants/route';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
			<div className="space-x-2 pt-6 pb-8 md:space-y-5">
				<h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
					404
				</h1>
			</div>
			<div className="max-w-md">
				<p className="mb-4 text-xl font-bold leading-normal md:text-2xl">Sorry, we couldn&apos;t find this page.</p>
				<p className="mb-8">But don&apos;t worry, you can find plenty of other things on our website 👀</p>
				<Link href={route.HOME}>
					<button className="px-4 py-2 rounded-lg border border-transparent bg-orange-200 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-orange-100 focus:outline-none focus:shadow-outline-blue ">
						Back to Home
					</button>
				</Link>
			</div>
		</div>
	);
}
