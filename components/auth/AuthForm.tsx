'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { AuthSchema, authSchema } from '../../app/auth/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { createClient } from '@/supabase/client';
import { useSetRecoilState } from 'recoil';
import userState from '@/recoil/atom/userState';
import route from '@/constants/route';

export default function AuthForm() {
	const supabase = createClient();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setFocus,
	} = useForm<AuthSchema>({
		resolver: zodResolver(authSchema),
	});

	const setUser = useSetRecoilState(userState);

	const onSubmit = async ({ email }: AuthSchema) => {
		try {
			const { data: user, error: loginError } = await supabase
				.from('users')
				.select('*')
				.eq('userEmail', email)
				.single();

			const isLoggined = user?.length !== 0;

			if (loginError) {
				throw { error: loginError, message: '로그인에 문제가 발생하였습니다' };
			}

			if (isLoggined) {
				setUser(user);

				router.push(route.HOME);
			}
		} catch (error) {
			reset();
			setFocus('email');

			console.error(error);
		}
	};

	//TODO: 로그인 혹은 로그아웃 되었다는 알림 / pop modal 필요

	return (
		<form className="mt-4 w-[300px]" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="font-bold">
					Email
				</label>
				<input
					type="email"
					id="email"
					placeholder="이메일을 입력하세요"
					className="px-4 py-2 placeholder:text-gray-500 border border-gray-200 rounded-lg outline-offset-2 appearance-none resize-none overflow-hidden hover:bg-gray-100 focus:outline-2 focus:outline-rose-200 "
					{...register('email')}
				/>
				{errors.email?.message && <p className="pl-1 text-red text-sm">* {errors.email?.message}</p>}
			</div>

			<button
				type="submit"
				className="mt-4 px-4 py-2 w-full bg-dark text-white font-bold rounded-lg transition-colors hover:bg-gray-900">
				인증하기
			</button>
		</form>
	);
}
