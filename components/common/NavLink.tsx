import Link from 'next/link';

interface NavLinkProps {
	link: string;
	currentPath: string;
	onClick?: () => void;
}

export default function NavLink({ link, currentPath, onClick }: NavLinkProps) {
	return (
		<div
			className={`relative flex items-center px-2 py-1 text-xl font-bold cursor-pointer hover:underline hover:underline-offset-[8px] min-w-[110px] clip-path-outer clip-path-button`}
			onClick={onClick}></div>
	);
}
