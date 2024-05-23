'use client';

import { useState } from 'react';

interface SegmentedControlProps<T> {
	disabled?: boolean;
	data: readonly T[];
	orientation?: 'row' | 'col';
	gap?: number;
	width?: string;
	height?: string;
	radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	additionalStyle?: string;
}

export default function SegmentedControl<T extends string>({
	data,
	disabled = false,
	orientation = 'row',
	gap = 2,
	width = 'auto',
	height = 'auto',
	radius = 'md',
	additionalStyle = '',
}: SegmentedControlProps<T>) {
	const [currentValue, setCurrentValue] = useState<T>(data[0]);

	const _data = data.map(item => ({ label: item, value: item }));

	return (
		<div
			className={`inline-flex flex-${orientation} gap-${gap} p-1 w-${width} h-${height} rounded-${radius} bg-gray-200 ${additionalStyle}`}>
			{_data.map(({ label, value }, idx) => (
				<div
					key={idx}
					className={`rounded-md ${currentValue === value ? 'bg-white' : ''} text-center transition-colors  cursor-pointer`}>
					<input
						type="radio"
						id={label}
						name={`radio${label}`}
						value={value}
						checked={currentValue === value}
						onChange={() => setCurrentValue(value)}
						disabled={disabled}
						className="absolute w-0 h-0 overflow-hidden whitespace-nowrap opacity-0"
					/>
					<label htmlFor={label} className="inline-block w-full px-4 py-2 cursor-pointer">
						{value}
					</label>
				</div>
			))}
		</div>
	);
}
