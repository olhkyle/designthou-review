import React from 'react';
import { ReviewRegister, Reviews, ReviewsLoader } from '@/components';

export default function Page() {
	return (
		<>
			<ReviewRegister />
			<React.Suspense fallback={<ReviewsLoader />}>
				<Reviews />
			</React.Suspense>
		</>
	);
}
