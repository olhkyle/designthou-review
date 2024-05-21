'use client';

import route from '@/constants/route';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { AdminLayout, UserLayout } from '.';

interface RootProviderProps {
	children: ReactNode;
}

export default function RootProvider({ children }: RootProviderProps) {
	const pathname = usePathname();

	return (
		<RecoilRoot>
			{pathname.includes(route.ADMIN) ? <AdminLayout>{children}</AdminLayout> : <UserLayout>{children}</UserLayout>}
		</RecoilRoot>
	);
}
