'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import Link from 'next/link';
import Image from 'next/image';
import { AdminNav } from '.';
import route from '@/constants/route';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<RecoilRoot>
			<div id="wrap" className="flex mx-auto w-full h-full">
				<AdminNav />
				<main className="p-[1rem] sm:py-[2.5rem]">{children}</main>
				<Link href={route.ORIGINAL_DESIGNTHOU} target="_blank">
					<Image
						src="/small_logo.png"
						alt="designthou"
						width={100}
						height={100}
						className="fixed bottom-5 right-5 w-[50px] h-[50px] rounded-[50%] border border-gray-400 sm:bottom-10 sm:right-10"
					/>
				</Link>
			</div>
		</RecoilRoot>
	);
}
