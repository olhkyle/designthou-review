'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';
import Link from 'next/link';
import Image from 'next/image';
import { NextUIProvider } from '@nextui-org/react';
import { Nav, ToastProvider } from '.';

interface RootProviderProps {
	children: React.ReactNode;
}

export default function RootProvider({ children }: RootProviderProps) {
	return (
		<RecoilRoot>
			<NextUIProvider>
				<ToastProvider>
					<div id="wrap" className="mx-auto md:w-[768px]">
						<Nav />
						<main className="p-[1rem] ">{children}</main>
						<Link href="https://designthou.com" target="_blank">
							<Image
								src="/small_logo.png"
								alt="designthou"
								width={100}
								height={100}
								className="fixed bottom-5 right-5 w-[50px] h-[50px] rounded-[50%] border-[1px] border-gray-400 sm:bottom-10 sm:right-10"
							/>
						</Link>
					</div>
				</ToastProvider>
			</NextUIProvider>
		</RecoilRoot>
	);
}
