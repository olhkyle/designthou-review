'use client';

import { useState } from 'react';
import { CourseSelect, Flex } from '.';
import { Review } from '@/supabase/schema';
import Image from 'next/image';
import { IndividualCourse } from '@/constants/course';
import blurDataUrl from '@/constants/blurDataUrl';

interface MyReviewsProps {
	data: Review[] | null;
}

export default function MyReviews({ data = [] }: MyReviewsProps) {
	const [currentCourse, setCurrentCourse] = useState<IndividualCourse>('rhino');

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
					?.filter(({ course }) => course === currentCourse)
					?.map(({ title, content, imgSrc }) => (
						<li
							key={title}
							className="flex items-center gap-4 p-2 min-h-[100px] bg-white border border-gray-200 rounded-lg cursor-pointer transition-colors hover:bg-gray-10">
							<div className="min-w-[100px] md:min-w-[120px]">
								<Image
									src={imgSrc}
									alt={`${title}/${content}`}
									className="w-[100px] sm:w-[150px] object-contain rounded-lg"
									width={150}
									height={100}
									sizes={'(min-width: 640px): 150px, 100px'}
									placeholder="blur"
									blurDataURL={blurDataUrl}
								/>
							</div>

							<Flex direction={'col'} gap="gap-1 sm:gap-2" additionalStyle={'h-full'}>
								<span className="font-bold">{title}</span>
								<p className="h-[100px] text-ellipsis overflow-hidden whitespace-wrap break-keep text-sm sm:h-full">
									{content}
								</p>
							</Flex>
						</li>
					))}
			</ul>
		</div>
	);
}
