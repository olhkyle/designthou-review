import Image from 'next/image';
import { createClient } from '@/supabase/server';
import { Flex } from '@/components';
import DEFAULT_IMG_URL from '@/public/default_img.png';
import { Suspense } from 'react';
import { WriterRelatedReviews } from '@/components/review';
import WriterRelatedReviewsLoader from '@/components/loader/WriterRelatedReviewsLoader';

export default async function Page({ params: { id: reviewId } }: { params: { id: string } }) {
	const supabase = createClient();

	const {
		data: { username, content, title, imgSrc },
		error: getReviewError,
	} = await supabase.from('reviews').select().eq('id', reviewId).single();

	if (getReviewError) {
		throw { error: getReviewError, message: `id ${reviewId}번 후기를 가져오는데 문제가 발생하였습니다.` };
	}

	return (
		<>
			<div className="mt-4">
				<div key={reviewId}>
					<Flex direction={'col'} gap={'gap-2'} margin={'mb-10'}>
						<h3 className="text-xl font-bold ">{title}</h3>
						<div className="rounded-lg text-xs text-gray-600">
							<span># 작성자 - </span>
							<span className="px-2 py-1 bg-dark text-white rounded-lg">{username}</span>
						</div>
					</Flex>
					<Image
						src={imgSrc ?? DEFAULT_IMG_URL}
						alt={`${username}_${title}`}
						width={400}
						height={400}
						className="block w-full bg-cover object-center rounded-xl"
					/>

					<div className="mt-10">{content}</div>
				</div>
			</div>

			<Suspense fallback={<WriterRelatedReviewsLoader />}>
				<WriterRelatedReviews reviewId={reviewId} username={username} />
			</Suspense>
		</>
	);
}
