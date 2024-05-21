import { Suspense } from 'react';
import { ReviewRegister, Reviews, ReviewsLoader } from '@/components';

export default function Page() {
	return (
		<>
			<ReviewRegister />
			<Suspense fallback={<ReviewsLoader />}>
				<Reviews />
			</Suspense>
		</>
	);
}
