interface InputProps {
	placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			className="px-4 py-2 border-[1px] border-gray-200 rounded-lg focus:border-black outline-none"
		/>
	);
}
