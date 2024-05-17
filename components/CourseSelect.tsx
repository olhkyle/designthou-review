import course, { IndividualCourse } from '@/constants/course';
import { Dispatch, SetStateAction } from 'react';
import { MdClose } from 'react-icons/md';

interface CourseSelectProps {
	target: IndividualCourse;
	setTarget: Dispatch<SetStateAction<IndividualCourse>>;
}

export default function CourseSelect({ target, setTarget }: CourseSelectProps) {
	return (
		<ul className="flex gap-2 px-1 pt-4 pb-2 w-full overflow-x-scroll">
			{course.map(item =>
				item === '' ? (
					<li
						key={item}
						className="inline-flex justify-center items-center p-1 text-sm text-white border-[1px] border-white bg-gray-600 rounded-md cursor-pointer hover:bg-gray-500"
						onClick={() => setTarget('')}>
						<MdClose size={18} />
					</li>
				) : (
					<li
						key={item}
						className={`inline-flex justify-center items-center px-2 py-1 h-[30px] text-sm border-[1px] ${
							target === item ? 'bg-white border-rose-500 font-semibold' : 'bg-gray-300 border-white'
						} rounded-md cursor-pointer transition-colors`}
						onClick={() => {
							setTarget(item);
						}}>
						{item.toUpperCase()}
					</li>
				),
			)}
		</ul>
	);
}
