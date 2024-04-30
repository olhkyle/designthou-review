import { ReactNode } from 'react';

interface FlexProps {
	direction?: 'row' | 'col';
	gap?: string;
	justifyContent?: 'justify-start' | 'justify-center' | 'justify-end' | 'justify-between' | 'justify-around';
	alignItems?: 'items-start' | 'items-center' | 'items-end';
	margin?: string;
	padding?: string;
	additionalStyle?: string;
	children: ReactNode;
}

export default function Flex({
	direction = 'row',
	gap = '',
	justifyContent = 'justify-center',
	alignItems = 'items-start',
	margin = '',
	padding = '',
	additionalStyle = '',
	children,
}: FlexProps) {
	return (
		<div
			className={`flex ${
				direction === 'col' && 'flex-col'
			} ${gap} ${justifyContent} ${alignItems} ${margin} ${padding} ${additionalStyle} w-full`}>
			{children}
		</div>
	);
}
