import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/supabase/server';
import { ReviewRegister } from '@/components';

export default async function Home() {
	const supabase = createClient();

	const { data: reviews } = await supabase.from('reviews').select('*');

	return (
		<>
			<ReviewRegister />
			<ul className="flex flex-col gap-4 my-10">
				{reviews?.slice(0, 10).map(({ id, username, title, content, imgSrc }) => (
					<li
						key={id}
						className="p-4 border border-gray-200 rounded-xl outline-rose-200 outline-2 outline-offset-2 hover:outline active:outline cursor-pointer transition-all">
						<Link href={`/reviews/${id}`} className="flex flex-col gap-6 justify-between sm:flex-row">
							<Image
								src={imgSrc}
								alt={`${username}_${title}`}
								className="w-[150px] h-[100px] sm:w-[250px] sm:h-[166px]"
								width={400}
								height={200}
								sizes={'(min-width: 640px): 250px, 150px'}
							/>

							<div className="">
								<div className="justify-between items-center mb-2 sm:flex">
									<div className="font-bold text-sm sm:text-[15px]">{title}</div>
									<span className="px-2 py-1 text-xs font-semibold text-white bg-dark rounded-lg">
										{username.includes('@') ? username.split('@')[0] : username}
									</span>
								</div>
								<div className=" text-sm text-ellipsis overflow-hidden break-keep whitespace-nowrap sm:w-[400px] sm:text-[15px] sm:whitespace-normal">
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
