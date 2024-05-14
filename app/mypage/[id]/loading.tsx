import { Flex } from '@/components';

export default function Loading() {
	return (
		<div className="mt-2">
			<div className="mt-4 p-2 h-[60px] bg-gray-50 animate-pulse"></div>

			<div>
				<Flex justifyContent={'justify-between'} alignItems="items-center" margin={'mt-10'} additionalStyle="h-[90px]">
					<span className="w-[140px] h-[32px] animate-pulse bg-gray-50"></span>
					<span className="animate-pulse bg-gray-50"></span>
				</Flex>

				<ul className="flex gap-2 px-1 pt-4 pb-2 w-full">
					<li className="px-2 py-1 w-[60px] h-[30px] bg-gray-50 rounded-md"></li>
					<li className="px-2 py-1 w-[60px] h-[30px] bg-gray-50 rounded-md"></li>
					<li className="px-2 py-1 w-[60px] h-[30px] bg-gray-50 rounded-md"></li>
					<li className="px-2 py-1 w-[60px] h-[30px] bg-gray-50 rounded-md"></li>
				</ul>

				<ul className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 animate-pulse">
					<li className="w-full h-[80px] animate-pulse bg-gray-50"></li>
					<li className="w-full h-[80px] animate-pulse bg-gray-50"></li>
				</ul>
			</div>
		</div>
	);
}
