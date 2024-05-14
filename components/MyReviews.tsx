'use client';

import { Suspense, useState } from 'react';
import { CourseSelect, Flex } from '.';
import { Review } from '@/supabase/schema';
import Image from 'next/image';

interface MyReviewsProps {
	data: Review[] | null;
}

export default function MyReviews({ data = [] }: MyReviewsProps) {
	const [currentCourse, setCurrentCourse] = useState('rhino');

	return (
		<div>
			<Flex justifyContent={'justify-between'} alignItems="items-center" margin={'mt-10'}>
				<span className="font-bold text-2xl">My Reviews</span>
				<span className="font-bold text-[48px] sm:text-[60px]">
					{data?.filter(review => review.course === currentCourse).length}
				</span>
			</Flex>

			<CourseSelect target={currentCourse} setTarget={setCurrentCourse} />

			<ul className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
				{data
					?.filter(review => review.course === currentCourse)
					?.map(({ title, content, course, imgSrc }) => (
						<li
							key={title}
							className="flex justify-center items-center gap-4 p-2 bg-white border-[1px] border-gray-400 rounded-lg cursor-pointer hover:bg-gray-10">
							<Suspense fallback={<h2>loading</h2>}>
								<Image src={imgSrc} alt={`${title}/${content}`} width={100} height={100} className="rounded-lg" />
							</Suspense>
							<Flex direction={'col'} justifyContent={'justify-between'}>
								<Flex justifyContent={'justify-between'} alignItems="items-center">
									<span className="font-bold text-lg">{title}</span>
									<span className="px-[4px] py-[2px] text-white from-rose-300 to-orange-100 bg-gradient-to-r rounded-lg">
										{course}
									</span>
								</Flex>
								<div className="h-[24px] text-ellipsis overflow-hidden break-keep whitespace-nowrap">{content}</div>
							</Flex>
						</li>
					))}
			</ul>
		</div>
	);
}
