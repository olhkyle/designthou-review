type DateType<T> = T extends readonly unknown[] ? T[number] : never;

const year = ['2024', '2023', '2022'] as const;
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const;

const makeTwoDigitUnit = (month: number) => (month + '').padStart(2, '0');

const formatDate = (_date: Date) => {
	const target = new Date(_date);

	const [year, month, date] = [target.getFullYear(), target.getMonth(), target.getDate()];

	return `${year}-${makeTwoDigitUnit(month + 1)}-${date}`;
};

export type { DateType };
export { year, month, makeTwoDigitUnit, formatDate };
