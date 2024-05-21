import { Flex } from '@/components';

export default function Loading() {
	return (
		<div className="mt-2">
			<div className="mt-4 p-2 h-[60px] loading-pulse"></div>

			<div>
				<Flex justifyContent={'justify-between'} alignItems="items-center" margin={'mt-10'} additionalStyle="h-[90px]">
					<span className="w-[140px] h-[32px] loading-pulse"></span>
					<span className="loading-pulse"></span>
				</Flex>

				<ul className="flex gap-2 px-1 pt-4 pb-2 w-full">
					<li className="px-2 py-1 w-[60px] h-[30px] loading-pulse"></li>
					<li className="px-2 py-1 w-[60px] h-[30px] loading-pulse"></li>
					<li className="px-2 py-1 w-[60px] h-[30px] loading-pulse"></li>
					<li className="px-2 py-1 w-[60px] h-[30px] loading-pulse"></li>
				</ul>

				<ul className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
					<li className="w-full h-[100px] loading-pulse"></li>
					<li className="w-full h-[100px] loading-pulse"></li>
				</ul>
			</div>
		</div>
	);
}
