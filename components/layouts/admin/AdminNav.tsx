'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { BsCalendar2Check } from 'react-icons/bs';
import { RiUser3Line } from 'react-icons/ri';
import LOGO from '@/public/logo.png';
import { SideNav, Button } from '../..';
import userState from '@/recoil/atom/userState';
import { useClickOutside } from '@/hooks';
import route from '@/constants/route';

export default function AdminNav() {
	const router = useRouter();
	const pathname = usePathname();

	const [user, setUser] = useRecoilState(userState);

	const [isClient, setClient] = useState(false);
	const [isDropdownActive, setDropdownActive] = useState(false);

	const containerRef = useClickOutside(() => setDropdownActive(false));

	useEffect(() => {
		setClient(true);
	}, []);

	return (
		<nav className="w-[240px] h-screen bg-gray-50">
			{/* <SideNav user={user} setUser={setUser} isClient={isClient} /> */}

			<div className="flex flex-col justify-end items-center gap-4 ">
				<Link href={route.NEWS} className="p-2 border border-gray-50 bg-white rounded-lg hover:bg-gray-50">
					NEWS
				</Link>
				<Link href={route.CALENDAR} className="relative p-2 border border-gray-50 bg-white rounded-lg hover:bg-gray-50">
					CALENDAR
				</Link>
			</div>
		</nav>
	);
}
