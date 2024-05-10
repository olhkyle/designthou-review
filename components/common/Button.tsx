'use client';

import { ReactNode } from 'react';

interface ButtonProps {
	type: 'button' | 'submit';
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
	children: ReactNode;
	margin?: string;
	padding?: string;
}

export default function Button({
	type,
	className,
	disabled = false,
	onClick,
	children,
	margin = '',
	padding = 'py-[6px] px-[8px]',
}: ButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${margin} ${padding} rounded-lg font-bold ${className}`}>
			{children}
		</button>
	);
}
