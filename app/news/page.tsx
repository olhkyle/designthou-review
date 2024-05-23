import Link from 'next/link';
import { createClient } from '@/supabase/server';
import { formatDate, month, year } from '@/constants/day';
import { SegmentedControl } from '@/components';

export default async function Page() {
	const supabase = createClient();

	const { data: newsContents, error: getNewsError } = await supabase.from('news').select('*').range(0, 9);

	if (getNewsError) {
		throw { error: getNewsError, message: '뉴스 정보를 가져오는 데 문제가 발생하였습니다.' };
	}

	return (
		<div className="flex gap-4 px-4 mx-auto md:w-[1024px]">
			<div className="flex flex-col gap-4">
				<div>
					<h3>Year</h3>
					<SegmentedControl data={year} orientation="col" additionalStyle={''} />
				</div>
				<div>
					<h3>Month</h3>
					<SegmentedControl data={month} orientation="col" width={'full'} additionalStyle={''} />
				</div>
			</div>

			<div className="col-span-2">
				<ul className="grid grid-cols-1 gap-4 px-4 mx-auto sm:grid-cols-2 ">
					{newsContents.map(({ id, title, url, createdAt }) => (
						<li key={id} className="bg-gray-200 rounded-lg">
							<Link
								href={url}
								target="_blank"
								className="inline-flex flex-col justify-between gap-2 p-4 cursor-pointer">
								<span className="px-2 py-1 w-[110px] bg-gray-400 text-gray-700 font-semibold text-sm rounded-lg text-center">
									{formatDate(createdAt)}
								</span>
								<p>{title}</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
