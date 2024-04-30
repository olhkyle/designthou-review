'use client';

import { useState } from 'react';
import { Button, Flex, TextArea, CourseSelect } from '.';

export default function ReviewRegister() {
	const [content, setContent] = useState('');
	const [target, setTarget] = useState('');

	return (
		<Flex
			direction="col"
			alignItems="items-start"
			margin={'mt-6'}
			additionalStyle="px-2 py-4 bg-gray-50 border-[1px] border-gray-300 rounded-lg">
			<Flex gap={'gap-2'} justifyContent={'justify-center'}>
				<TextArea
					content={content}
					placeholder={'후기를 남겨주세요'}
					width={'w-[80%] sm:w-[90%]'}
					setContent={setContent}
				/>
				<Button
					type={'button'}
					className={content.length === 0 ? 'bg-gray-400 text-gray-700' : 'bg-orange-200 hover:bg-orange-100'}
					disabled={content.length === 0}>
					등 록
				</Button>
			</Flex>
			<CourseSelect target={target} setTarget={setTarget} />
			<p className="px-3 py-2 text-gray-700 text-sm">* 후기는 500자로 제한됩니다.</p>
		</Flex>
	);
}
