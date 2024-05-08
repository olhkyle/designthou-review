'use client';

import { useState } from 'react';
import { CourseSelect, Flex } from '.';
import { Review } from '@/supabase/schema';

interface MyReviewsProps {
	data: Review[] | null;
}

export default function MyReviews({ data = [] }: MyReviewsProps) {
	const [currentCourse, setCurrentCourse] = useState('rhino');

	return (
		<div>
			<Flex justifyContent={'justify-between'} alignItems="items-center" margin={'mt-10'}>
				<span className="font-bold text-2xl">My Reviews</span>
				<span className="font-bold text-[60px]">{data?.filter(review => review.course === currentCourse).length}</span>
			</Flex>

			<CourseSelect target={currentCourse} setTarget={setCurrentCourse} />

			<ul className="flex flex-col gap-4 mt-4">
				{data
					?.filter(review => review.course === currentCourse)
					?.map(({ title, content, course }) => (
						<li
							key={title}
							className="p-2 bg-white border-[1px] border-gray-400 rounded-lg cursor-pointer hover:bg-gray-10">
							<Flex justifyContent={'justify-between'} alignItems="items-center">
								<span className="font-bold text-lg">{title}</span>
								<span className="px-[4px] py-[2px] text-white from-rose-300 to-orange-100 bg-gradient-to-r rounded-lg">
									{course}
								</span>
							</Flex>
							<div className="h-[24px] text-ellipsis overflow-hidden break-keep whitespace-nowrap ">{content}</div>
						</li>
					))}
			</ul>
		</div>
	);
}
