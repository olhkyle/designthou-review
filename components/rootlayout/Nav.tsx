'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { BsCalendar2Check } from 'react-icons/bs';
import { RiUser3Line } from 'react-icons/ri';
import { Button } from '../common';
import userState from '@/recoil/atom/userState';
import useClickOutside from '@/hooks/useClickOutside';
import route from '@/constants/route';
import SideNav from './SideNav';

export default function Nav() {
	const router = useRouter();
	const pathname = usePathname();

	const [user, setUser] = useRecoilState(userState);

	const [isClient, setClient] = useState(false);
	const [isDropdownActive, setDropdownActive] = useState(false);

	const containerRef = useClickOutside(() => setDropdownActive(false));

	useEffect(() => {
		setClient(true);
	}, []);
	// TODO: 임시저장 기능
	return (
		<>
			<nav className="sticky top-0 mx-auto px-[1rem] backdrop-blur sm:bg-white dark:sm:bg-dark sm:backdrop-blur-none md:w-[768px] lg:w-[1024px] z-40">
				<div className="flex justify-between items-center mx-auto h-[var(--nav-height)]">
					<h1 className="flex-center min-w-[180px] h-[60px] cursor-pointer">
						<Link href={route.HOME}>
							<Image src="/logo.png" alt="logo" width={180} height={60} priority />
						</Link>
					</h1>

					<SideNav user={user} setUser={setUser} isClient={isClient} />

					<div className="hidden justify-end items-center gap-4 md:inline-flex">
						<Link
							href={route.NEWS}
							className="p-2 border-[1px] border-gray-50 bg-white font-semibold rounded-lg hover:bg-gray-50">
							NEWS
						</Link>
						<Link
							href={route.CALENDAR}
							className="relative p-2 border-[1px] border-gray-50 bg-white rounded-lg hover:bg-gray-50">
							<BsCalendar2Check size={24} />
							<span className="animate-pulse absolute -top-1 -right-1 w-3 h-3 inline-block rounded-full bg-blue-400 " />
						</Link>

						<div className="relative" ref={containerRef}>
							<Button
								type={'button'}
								className={`${
									pathname === route.AUTH ? 'hidden' : 'inline-flex'
								} justify-center items-center w-[36px] h-[36px] rounded-full ${
									isClient && user ? 'bg-orange-400' : 'bg-gray-400'
								}`}
								onClick={() => {
									if (user) {
										setDropdownActive(isDropdownActive => !isDropdownActive);
									} else {
										router.push(route.AUTH);
									}
								}}>
								<RiUser3Line size={30} color={'var(--color-white)'} />
							</Button>

							<div
								className={`${
									isDropdownActive ? 'absolute' : 'hidden'
								} top-12 right-0 flex flex-col items-center p-2 w-[120px] bg-gray-100 rounded-md border-[1px] border-gray-300`}>
								<Button
									type="button"
									className="rounded-lg text-sm text-dark hover:bg-gray-400"
									onClick={() => {
										setDropdownActive(false);
										router.push(`${route.MYPAGE}/${user?.userId}`);
									}}>
									MY PAGE
								</Button>

								<Button
									type="button"
									className="rounded-lg text-sm text-dark hover:bg-gray-400"
									onClick={() => {
										setUser(null);
										setDropdownActive(false);

										router.push(route.HOME);
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
