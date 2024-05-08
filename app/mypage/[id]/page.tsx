import { createClient } from '@/supabase/server';
import { GoBackButton, Flex, CourseSelect, MyReviews } from '@/components';
import { QueryData } from '@supabase/supabase-js';
import { Review } from '@/supabase/schema';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page({ params: { id } }: { params: { id: string } }) {
	const supabase = createClient();
	const { data: user, error } = await supabase.from('users').select().eq('userId', id).single();

	const { data: myReviews, error: getMyReviewsError } = await supabase
		.from('reviews')
		.select('*')
		.eq('username', user?.username)
		.returns<Review[]>();

	if (error) {
		throw error;
	}

	const { username, userEmail } = user;

	return (
		<div className="mt-2">
			<GoBackButton />
			<div className="mt-4 p-2 bg-gradient-to-r from-rose-300 to-orange-100 text-white rounded-lg">
				<span className="font-bold text-white text-xl">{username}</span>
				<div>{userEmail}</div>
			</div>

			<MyReviews data={myReviews} />
		</div>
	);
}
