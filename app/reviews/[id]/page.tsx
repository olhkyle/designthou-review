import { createClient } from '@/supabase/server';
import { GoBackButton, Flex } from '@/components';
import Image from 'next/image';

export default async function Page({ params: { id } }: { params: { id: string } }) {
	const supabase = createClient();
	const {
		data: { id: reviewId, username, content, title, imgSrc },
		error: getReviewError,
	} = await supabase.from('reviews').select().eq('id', id).single();

	if (getReviewError) {
		throw getReviewError;
	}

	return (
		<div className="mt-2">
			<GoBackButton />
			<div className="mt-4">
				<div key={reviewId}>
					<Flex direction={'col'} gap={'gap-2'} margin={'mb-10'}>
						<h3 className="text-xl font-bold ">{title}</h3>
						<div className="rounded-lg text-xs text-gray-600">
							<span># 작성자 - </span>
							<span className="px-2 py-1 bg-dark text-white rounded-lg">{username}</span>
						</div>
					</Flex>
					<div className="rounded-xl">
						<Image
							src={imgSrc}
							alt={`${username}_${title}`}
							width={400}
							height={400}
							className="block w-full bg-cover bg-center"
						/>
					</div>
					<div className="mt-10">{content}</div>
				</div>
			</div>
		</div>
	);
}
