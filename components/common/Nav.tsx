'use client';

import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from './Button';

export default function Nav() {
	const router = useRouter();

	// TODOS: 임시저장 기능
	return (
		<>
			<nav className="sticky top-0 px-[1rem] backdrop-blur sm:bg-white dark:sm:bg-dark sm:backdrop-blur-none z-40">
				<div className="flex justify-between items-center mx-auto h-[80px]">
					<button
						className="inline-flex gap-2 items-center px-4 py-2 font-bold text-xs bg-gray-10 rounded-lg hover:bg-gray-200 sm:text-sm"
						onClick={() => router.back()}>
						<IoMdArrowBack size={16} />
						<span className="hidden sm:block">뒤로 가기</span>
					</button>
					<h1 className="flex-center min-w-[130px] h-[60px] cursor-pointer">
						<Link href="https://www.designthou.com" target="_blank">
							<Image src="/logo.png" alt="logo" width={200} height={200} priority />
						</Link>
					</h1>
					<Button
						type={'button'}
						className={'inline-flex gap-2 text-xs bg-black text-white hover:bg-gray-800 sm:text-sm'}
						onClick={() => router.push('/auth')}>
						<span>인증하기</span>
					</Button>
				</div>
			</nav>
		</>
	);
}
