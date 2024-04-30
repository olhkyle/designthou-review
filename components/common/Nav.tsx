'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilState } from 'recoil';
import { Button } from '.';
import userState from '@/recoil/atom/userState';
import useClickOutside from '@/hooks/useClickOutside';

export default function Nav() {
	const router = useRouter();
	const [user, setUser] = useRecoilState(userState);
	const [isClient, setIsClient] = React.useState(false);
	const [isDropdownActive, setDropdownActive] = React.useState(false);

	const containerRef = useClickOutside(() => setDropdownActive(false));

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	// TODOS: 임시저장 기능
	return (
		<>
			<nav className="sticky top-0 px-[1rem] backdrop-blur sm:bg-white dark:sm:bg-dark sm:backdrop-blur-none z-40">
				<div className="flex justify-between items-center mx-auto h-[80px]">
					<h1 className="flex-center min-w-[130px] h-[60px] cursor-pointer">
						<Link href="/">
							<Image src="/logo.png" alt="logo" width={200} height={200} priority />
						</Link>
					</h1>

					<div className="relative inline-flex justify-end" ref={containerRef}>
						<Button
							type={'button'}
							className={`inline-flex gap-2 text-xs text-white hover:bg-gray-800 sm:text-sm ${
								isClient ? 'bg-dark' : 'bg-gray-500'
							}`}
							onClick={() => {
								if (user) {
									setDropdownActive(isDropdownActive => !isDropdownActive);
								} else {
									router.push('/auth');
								}
							}}>
							<span>{isClient && user ? user?.username : '인증하기'}</span>
						</Button>
						<div
							className={`${
								isDropdownActive ? 'absolute' : 'hidden'
							} top-10 right-0 flex flex-col items-center p-2 w-[100px] bg-gray-100 rounded-md border-[1px] border-gray-300`}>
							<Button type="button" className="font-normal text-sm text-black hover:bg-gray-400 hover:font-semibold">
								내 정보
							</Button>
							<Button
								type="button"
								className="font-normal text-sm text-black hover:bg-gray-400 hover:font-semibold"
								onClick={() => {
									setUser(null);
									setDropdownActive(false);
								}}>
								로그아웃
							</Button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
