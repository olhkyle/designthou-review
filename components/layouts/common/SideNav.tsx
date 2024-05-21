'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { User } from '@/supabase/schema';
import { MdClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Button } from '@/components';
import route from '@/constants/route';
import { useOverlayFixed, ClientGate } from '@/hooks';

interface SideNavProps {
	user: User | null;
	setUser: Dispatch<SetStateAction<User | null>>;
	isClient: boolean;
}

export default function SideNav({ user, setUser, isClient }: SideNavProps) {
	const router = useRouter();
	const pathname = usePathname();
	const [isSideNavActive, setSideNavActive] = useState(false);

	useOverlayFixed(isSideNavActive);

	useEffect(() => {
		setSideNavActive(false);
	}, [pathname]);

	return (
		<div className="block md:hidden">
			<Button
				type="button"
				className="inline-block font-normal text-sm text-dark border border-gray-50 rounded-lg hover:bg-gray-400 hover:font-semibold md:hidden transition-all"
				onClick={() => {
					setSideNavActive(!isSideNavActive);
				}}>
				{isSideNavActive ? <MdClose size={24} /> : <RxHamburgerMenu size={24} />}
			</Button>

			<div
				className={`${
					isSideNavActive ? 'fixed visible' : 'hidden'
				} top-[var(--nav-height)] left-0 right-0 bottom-0 p-4 max-w-screen w-full h-[calc(100vh-var(--nav-height))] bg-white overflow-y-scroll md:hidden z-50`}>
				<div className="flex flex-col justify-between h-full">
					<div className="flex flex-col justify-between items-center gap-2 w-full">
						<Link
							href={route.NEWS}
							className="p-4 w-full border border-gray-50 font-semibold rounded-lg hover:bg-gray-50 active:bg-gray-400">
							NEWS
						</Link>
						<Link
							href={route.CALENDAR}
							className="p-4 w-full border border-gray-50 font-semibold rounded-lg hover:bg-gray-50 active:bg-gray-400">
							RECRUIT CALENDAR
						</Link>
						<Link
							href={route.WAREHOUSE}
							className="p-4 w-full border border-gray-50 font-semibold rounded-lg hover:bg-gray-50 active:bg-gray-400">
							WAREHOUSE
						</Link>

						<Link
							href={isClient && user ? `${route.MYPAGE}/${user.userId}` : route.AUTH}
							className="p-4 w-full border border-gray-50 font-semibold rounded-lg hover:bg-gray-50 active:bg-gray-400"
							onClick={() => setSideNavActive(false)}>
							MY INFO
						</Link>
					</div>

					<div
						className={`${isSideNavActive ? 'flex' : 'hidden'} flex-col justify-center items-center w-full h-[60px]`}>
						<ClientGate>
							<Button
								type="button"
								className="inline-flex justify-center items-center w-full h-[48px] font-semibold text-white text-lg bg-orange-400 rounded-lg focus:bg-orange-300 active:bg-orange-300"
								onClick={() => {
									if (!user) {
										setSideNavActive(false);

										router.push(route.AUTH);
										return;
									}

									setSideNavActive(false);
									setUser(null);

									router.push(route.HOME);
								}}>
								{user ? 'LOGOUT' : 'LOGIN'}
							</Button>
						</ClientGate>
					</div>
				</div>
			</div>
		</div>
	);
}
