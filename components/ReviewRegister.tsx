'use client';

import { useState } from 'react';
import Button from './common/Button';
import Flex from './common/Flex';
import TextArea from './common/TextArea';

export default function ReviewRegister() {
	const [content, setContent] = useState('');

	return (
		<Flex direction="col" alignItems="items-start">
			<Flex gap={'gap-2'} justifyContent={'justify-center'} margin={'mt-6'}>
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
			<p className="px-3 py-2 text-gray-700 text-sm">* 후기는 1000자로 제한됩니다.</p>
		</Flex>
	);
}
