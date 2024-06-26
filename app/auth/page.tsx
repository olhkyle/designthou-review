import { AuthForm } from '@/components';
import route from '@/constants/route';
import Link from 'next/link';

export default function Page() {
	return (
		<div className="flex flex-col justify-center items-center gap-5 mx-auto py-10 max-w-[300px]">
			<div className="text-2xl font-bold">Get Access</div>
			<AuthForm />
			<div>
				<p className="text-gray-500 text-sm">
					* 본 서비스는 인증 후에 <span className="font-bold">후기 등록</span>이 가능합니다.
				</p>
				<p className="text-gray-500 text-sm">
					* 본 서비스는 기존{' '}
					<Link href={route.ORIGINAL_DESIGNTHOU} className="text-gray-500 underline font-bold">
						디자인도우
					</Link>{' '}
					플랫폼 가입 이메일로 로그인이 가능합니다.
				</p>
			</div>
		</div>
	);
}
