'use client';

import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from 'react-icons/io';

export default function GoBackButton() {
	const router = useRouter();
	return (
		<button
			className="inline-flex gap-2 items-center px-2 py-2 font-bold text-xs bg-gray-10 border-[1px] border-gray-300 rounded-lg hover:bg-gray-200 sm:text-sm sm:hidden"
			onClick={() => router.back()}>
			<IoMdArrowBack size={16} />
		</button>
	);
}
