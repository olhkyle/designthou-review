import { createClient } from '@/supabase/server';
import { GoBackButton, MyReviews } from '@/components';
import { Review } from '@/supabase/schema';

interface MyPageProps {
	params: { id: string };
}

export default async function Page({ params: { id } }: MyPageProps) {
	const supabase = createClient();
	const { data: user, error: getUserIdError } = await supabase.from('users').select().eq('userId', id).single();

	const { data: myReviews, error: getMyReviewsError } = await supabase
		.from('reviews')
		.select('*')
		.eq('username', user?.username)
		.returns<Review[]>();

	if (getUserIdError) {
		throw getUserIdError;
	} else if (getMyReviewsError) {
		throw getMyReviewsError;
	}

	const { username, userEmail } = user;

	return (
		<div>
			<GoBackButton />
			<div className="mt-4 p-2 bg-gradient-to-r from-rose-300 to-orange-100 text-white rounded-lg">
				<span className="font-bold text-white text-xl">{username}</span>
				<div>{userEmail}</div>
			</div>

			<MyReviews data={myReviews} />
		</div>
	);
}
