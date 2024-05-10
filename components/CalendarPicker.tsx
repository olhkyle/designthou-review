'use client';
import { useState } from 'react';
import { Calendar, DateValue } from '@nextui-org/react';
import { parseDate } from '@internationalized/date';
import { format } from '../utils/dateFormat';

export default function CalendarPicker() {
	const today = `${new Date().getFullYear()}-${format(new Date().getMonth() + 1)}-${new Date().getDate()}`;
	const defaultDate = parseDate(today);

	const [selectedDate, setSelectedDate] = useState<DateValue>(defaultDate);

	return (
		<div className="flex justify-between">
			<Calendar
				calendarWidth={400}
				color="warning"
				focusedValue={selectedDate}
				onFocusChange={setSelectedDate}
				showMonthAndYearPickers
				aria-label="채용 캘린더"
				className="min-w-[300px]"
			/>

			<div>
				<span>
					{today
						.split('')
						.map(str => (str === '-' ? '.' : str))
						.join('')}
				</span>
				<span>금일 채용</span>
			</div>
		</div>
	);
}
