'use client';

import { ReactNode } from 'react';

interface ButtonProps {
	type: 'button' | 'submit';
	className: string;
	onClick?: () => void;
	disabled?: boolean;
	children: ReactNode;
}

export default function Button({ type, className, disabled = false, onClick, children }: ButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${className} rounded-lg font-bold px-[12px] py-[6px]`}>
			{children}
		</button>
	);
}
