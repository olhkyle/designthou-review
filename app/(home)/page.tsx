import { ReviewRegister, Reviews, ReviewsLoading } from '@/components';
import { Suspense } from 'react';

export default function Page() {
	return (
		<>
			<ReviewRegister />
			<Suspense fallback={<ReviewsLoading />}>
				<Reviews />
			</Suspense>
		</>
	);
}
