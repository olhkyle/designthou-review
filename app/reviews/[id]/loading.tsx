import { Flex } from '@/components';

export default function loading() {
	return (
		<div className="mt-2 mb-10">
			<div className="mt-4">
				<div>
					<Flex direction={'col'} gap={'gap-2'} margin={'mb-10'}>
						<h3 className="w-[300px] h-[30px] loading-pulse"></h3>
						<div className="w-[100px] h-[20px] loading-pulse"></div>
					</Flex>
					<div className="w-full h-[200px] loading-pulse sm:h-[420px]"></div>
					<div className="mt-10 w-full h-[100px] loading-pulse"></div>
				</div>
			</div>
		</div>
	);
}
