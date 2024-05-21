import { ReactNode } from 'react';
import { UserNav } from '.';
import Link from 'next/link';
import Image from 'next/image';

export default function UserLayout({ children }: { children: ReactNode }) {
	return (
		<div id="wrap" className="mx-auto md:w-[768px] lg:w-[1024px]">
			<UserNav />
			<main className="p-[1rem] sm:py-[2.5rem]">{children}</main>
			<Link href="https://designthou.com" target="_blank">
				<Image
					src="/small_logo.png"
					alt="designthou"
					width={100}
					height={100}
					className="fixed bottom-5 right-5 w-[50px] h-[50px] rounded-[50%] border border-gray-400 sm:bottom-10 sm:right-10"
				/>
			</Link>
		</div>
	);
}
