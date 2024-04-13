import { createClient } from '@/supabase/server';

export default async function Page({ params: { id } }: { params: { id: string } }) {
	const supabase = createClient();
	const { data: specificReview } = await supabase.from('reviews').select().eq('id', id);

	return (
		<div className="mt-16">
			{specificReview?.map(({ id, userId, content, title, imgSrc }) => (
				<div key={id}>
					<div className="flex flex-col gap-2 mb-10">
						<h3 className="text-xl font-bold ">{title}</h3>
						<div className="rounded-lg text-xs text-gray-600">
							<span># 작성자 - </span>
							<span className="px-2 py-1 bg-dark text-white rounded-lg">{userId}</span>
						</div>
					</div>
					<div className="rounded-xl">
						<img src={imgSrc} alt={`${userId}_${title}`} className="block w-full bg-cover bg-center" />
					</div>
					<div className="mt-10">{content}</div>
				</div>
			))}
		</div>
	);
}
