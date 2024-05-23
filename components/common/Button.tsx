'use client';

import { ReactNode } from 'react';

interface ButtonProps {
	type: 'button' | 'submit';
	disabled?: boolean;
	onClick?: () => void;
	children?: ReactNode;
	className?: string;
	margin?: string;
	padding?: string;
}

export default function Button({
	type,
	disabled = false,
	onClick,
	children,
	className,
	margin = '',
	padding = 'py-[6px] px-[8px]',
}: ButtonProps) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`${margin} ${padding} font-semibold ${className}`}>
			{children}
		</button>
	);
}
