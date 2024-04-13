import { createClient } from '@/supabase/server';
import ReviewRegister from '@/components/ReviewRegister';
import Link from 'next/link';

export default async function Home() {
	const supabase = createClient();

	const { data: reviews } = await supabase.from('reviews').select('*');

	return (
		<>
			<ReviewRegister />
			<ul className="flex flex-col gap-4 mt-10">
				{reviews?.slice(0, 10).map(({ id, userId, title, content, imgSrc }) => (
					<li
						key={id}
						className="p-4 border border-gray-200 rounded-xl outline-rose-200 outline-2 outline-offset-2 hover:outline active:outline cursor-pointer transition-all">
						<Link href={`/reviews/${id}`} className="flex flex-col gap-8 justify-between sm:flex-row">
							<div className="w-[300px] sm:w-[400px] rounded-lg">
								<img src={imgSrc} alt={`${userId}_${title}`} className="block w-full bg-cover bg-center" />
							</div>
							<div className="">
								<div className="justify-between mb-2 sm:flex">
									<div className="font-bold text-sm sm:text-[15px]">{title}</div>
									<span className="px-2 py-1 text-xs font-semibold text-white bg-dark rounded-lg">
										{userId.includes('@') ? userId.split('@')[0] : userId}
									</span>
								</div>
								<div className=" text-sm text-ellipsis overflow-hidden  break-keep whitespace-nowrap sm:w-[400px] sm:text-[15px] sm:whitespace-normal">
									{content}
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
