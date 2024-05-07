'use client';

import { Dispatch, SetStateAction, useRef } from 'react';

interface TextAreaProps {
	content: string;
	setContent?: Dispatch<SetStateAction<string>>;
	placeholder: string;
	width?: string;
	eventHandler?: () => void;
}

export default function TextArea({
	content,
	setContent = () => {},
	placeholder,
	width = 'w-full',
	eventHandler,
}: TextAreaProps) {
	const targetRef = useRef<HTMLTextAreaElement | null>(null);

	return (
		<textarea
			value={content}
			ref={targetRef}
			placeholder={placeholder}
			maxLength={500}
			rows={1}
			className={`px-4 py-2 ${width} placeholder:text-gray-500 border-[1px] border-gray-200 rounded-lg outline-offset-2 appearance-none cursor-pointer focus:outline-2 focus:outline-rose-200 resize-none overflow-hidden hover:bg-gray-100`}
			onChange={e => {
				if (!eventHandler) return;
				eventHandler();

				setContent(e.currentTarget.value);

				if (targetRef && targetRef.current) {
					targetRef.current.style.height = 'auto';
					targetRef.current.style.height = targetRef.current.scrollHeight + 'px';
				}
			}}
			onClick={() => {
				if (!eventHandler) return;

				eventHandler();
			}}
		/>
	);
}
