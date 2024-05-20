import { GoBackButton } from '@/components';

import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="mt-2 mb-10">
			<GoBackButton />
			{children}
		</div>
	);
}
