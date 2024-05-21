import { createClient } from '@/supabase/server';
import { GoBackButton, MyReviews } from '@/components';
import { Review } from '@/supabase/schema';
import route from '@/constants/route';
import Link from 'next/link';

interface MyPageProps {
	params: { id: string };
}

export default async function Page({ params: { id } }: MyPageProps) {
	const supabase = createClient();
	const {
		data: { username, userEmail, role },
		error: getUserIdError,
	} = await supabase.from('users').select().eq('userId', id).single();

	const { data: myReviews, error: getMyReviewsError } = await supabase
		.from('reviews')
		.select('*')
		.eq('username', username)
		.returns<Review[]>();

	if (getUserIdError) {
		throw { error: getUserIdError, message: 'userId를 가져오는데 문제가 발생하였습니다' };
	}

	if (getMyReviewsError) {
		throw { error: getMyReviewsError, message: `${username}의 리뷰들을 가져오는데 문제가 발생하였습니다.` };
	}

	return (
		<div>
			<div className="flex justify-between items-center">
				<GoBackButton />
				{role === 'administrator' && (
					<Link
						href={`${route.ADMIN}/${id}`}
						className="ml-auto p-2 bg-dark text-white font-semibold rounded-lg transition-colors hover:bg-gray-900">
						ADMIN
					</Link>
				)}
			</div>
			<div className="mt-4 p-2 bg-gradient-to-r from-rose-300 to-orange-100 text-white rounded-lg">
				<span className="font-bold text-white text-xl">{username}</span>
				<div>{userEmail}</div>
			</div>

			<MyReviews data={myReviews} />
		</div>
	);
}
