import { createClient } from '@/supabase/client';
import Image from 'next/image';
import Link from 'next/link';
import DEFAULT_IMG_URL from '@/public/default_img.png';
import blurDataUrl from '@/constants/blurDataUrl';

export default async function Reviews() {
	const supabase = createClient();

	const { data: reviews, error } = await supabase.from('reviews').select('*');

	if (error) {
		throw error;
	}

	return (
		<ul className="flex flex-col gap-4 my-10">
			{reviews?.slice(0, 9).map(({ id, username, title, content, imgSrc }) => (
				<li
					key={id}
					className="px-4 py-4 border border-gray-200 rounded-xl outline-rose-200 outline-2 outline-offset-2 hover:outline active:outline cursor-pointer transition-all sm:px-6 md:px-8 md:py-6">
					<Link href={`/reviews/${id}`} className="flex flex-col gap-8 justify-between sm:flex-row">
						<Image
							src={imgSrc ?? DEFAULT_IMG_URL}
							alt={`${username}_${title}`}
							className="w-[300px] sm:w-[400px] object-contain"
							width={400}
							height={266}
							sizes={'(min-width: 640px): 400px, 300px'}
							placeholder="blur"
							blurDataURL={blurDataUrl}
						/>

						<div className="">
							<div className="justify-between items-center mb-2 sm:flex">
								<div className="font-bold text-sm sm:text-[15px]">{title}</div>
								<span className="px-2 py-1 text-xs font-semibold text-white bg-dark rounded-lg">
									{username.includes('@') ? username.split('@')[0] : username}
								</span>
							</div>
							<div className="text-sm text-ellipsis overflow-hidden break-keep whitespace-nowrap sm:text-[15px] sm:whitespace-normal">
								{content}
							</div>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
}
