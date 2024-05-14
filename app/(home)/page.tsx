import { ReviewRegister } from '@/components';
import { Suspense } from 'react';
import Reviews from '@/components/Reviews';

export default async function Page() {
	return (
		<>
			<ReviewRegister />
			<Suspense fallback={<h1>Loading...</h1>}>
				<Reviews />
			</Suspense>
		</>
	);
}
