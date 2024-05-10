'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { BsCalendar2Check } from 'react-icons/bs';
import { Button } from '.';
import userState from '@/recoil/atom/userState';
import useClickOutside from '@/hooks/useClickOutside';
import route from '@/constants/route';

export default function Nav() {
	const router = useRouter();
	const pathname = usePathname();

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
					<h1 className="flex-center min-w-[180px] h-[60px] cursor-pointer">
						<Link href={route.HOME}>
							<Image src="/logo.png" alt="logo" width={180} height={60} priority />
						</Link>
					</h1>

					<div className="inline-flex justify-end items-center">
						<Link
							href="/calendar"
							className="relative mr-4 p-2 border-[1px] border-gray-50 bg-white rounded-lg hover:bg-gray-50">
							<BsCalendar2Check size={24} />
							<span className="animate-pulse absolute -top-1 -right-1 w-3 h-3 inline-block rounded-full bg-blue-400 " />
						</Link>
						<div className="relative" ref={containerRef}>
							<Button
								type={'button'}
								className={`${
									pathname === route.AUTH ? 'hidden' : 'inline-flex'
								} gap-2 text-xs text-white hover:bg-gray-800 sm:text-sm ${isClient ? 'bg-dark' : 'bg-gray-500'}`}
								onClick={() => {
									if (user) {
										setDropdownActive(isDropdownActive => !isDropdownActive);
									} else {
										router.push(route.AUTH);
									}
								}}>
								<span>{isClient && user ? user?.username : '인증하기'}</span>
							</Button>
							<div
								className={`${
									isDropdownActive ? 'absolute' : 'hidden'
								} top-10 right-0 flex flex-col items-center p-2 w-[100px] bg-gray-100 rounded-md border-[1px] border-gray-300`}>
								<Button
									type="button"
									className="font-normal text-sm text-dark hover:bg-gray-400 hover:font-semibold"
									onClick={() => {
										setDropdownActive(false);
										router.push(`${route.MYPAGE}/${user?.userId}`);
									}}>
									내 정보
								</Button>
								<Button
									type="button"
									className="font-normal text-sm text-dark hover:bg-gray-400 hover:font-semibold"
									onClick={() => {
										setUser(null);
										setDropdownActive(false);

										router.push(route.HOME);
										toast.info('로그아웃 되었습니다');
									}}>
									로그아웃
								</Button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
