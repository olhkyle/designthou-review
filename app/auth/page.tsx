import { AuthForm } from '@/components';

export default async function Page() {
	return (
		<div className="flex flex-col justify-center items-center gap-5 mx-auto py-10 max-w-[300px]">
			<div className="text-2xl font-bold">Get Access</div>
			<AuthForm />
			<p className="text-gray-500 text-sm">
				* 본 서비스는 인증 후에 <span className="font-bold">후기 등록</span>이 가능합니다.
			</p>
		</div>
	);
}
