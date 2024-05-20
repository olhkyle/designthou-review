import { ReviewRegister, Reviews, ReviewsLoader } from '@/components';
import { Suspense } from 'react';

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
