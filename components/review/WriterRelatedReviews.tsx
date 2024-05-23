import Link from 'next/link';
import { createClient } from '@/supabase/server';

interface IndividualReviewProps {
	reviewId: string;
	username: string;
}

export default async function WriterRelatedReivews({ reviewId, username }: IndividualReviewProps) {
	const supabase = createClient();

	const { data: selectedReviewsByUsername, error: selectedReviewsError } = await supabase
		.from('reviews')
		.select('*')
		.eq('username', username);

	if (selectedReviewsError) {
		throw { error: selectedReviewsError, message: '관련 후기를 가져오는데 문제가 발생하였습니다' };
	}

	return (
		<div className="mt-16">
			<h4 className="text-lg font-semibold">작성자 관련 후기</h4>
			<ul className="flex flex-col gap-4 items-center mt-4">
				{selectedReviewsByUsername
					?.filter(({ id: selectedReviewId }) => selectedReviewId !== +reviewId)
					.sort((prev, curr) => prev.id - curr.id)
					.map(({ id, content, title, course }) => (
						<li
							key={id}
							className="w-full border border-gray-50 rounded-lg bg-gray-100 hover:border-gray-300 hover:bg-gray-200 transition-colors">
							<Link href={`/review/${id}`} className="flex flex-col gap-2 px-4 py-2 ">
								<div className="flex justify-between">
									<span className="font-semibold">{title}</span>
									<span className="px-2 py-1 bg-gradient-to-tr font-semibold text-white text-xs rounded-lg from-orange-200 to-rose-500">
										{course}
									</span>
								</div>

								<div className="text-ellipsis overflow-hidden break-keep whitespace-nowrap">{content}</div>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
}
