import { ReactNode } from 'react';

interface FlexProps {
	position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
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
	position = 'static',
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
			className={`${position} flex ${
				direction === 'col' ? 'flex-col' : 'flex-row'
			} ${gap} ${justifyContent} ${alignItems} ${margin} ${padding} w-full ${additionalStyle}`}>
			{children}
		</div>
	);
}
