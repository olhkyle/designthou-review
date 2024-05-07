import course from '@/constants/course';
import { Dispatch, SetStateAction } from 'react';

interface CourseSelectProps {
	target: string;
	setTarget: Dispatch<SetStateAction<string>>;
}

export default function CourseSelect({ target, setTarget }: CourseSelectProps) {
	return (
		<ul className="flex gap-2 px-1 pt-4 pb-2 w-full overflow-x-scroll">
			{course.map(item => (
				<li
					key={item}
					className={`px-2 py-1 text-sm border-[1px] ${
						target === item ? 'bg-white border-rose-500 font-semibold' : 'bg-gray-300 border-white'
					} rounded-md cursor-pointer`}
					onClick={() => setTarget(item)}>
					{item.toUpperCase()}
				</li>
			))}
		</ul>
	);
}
