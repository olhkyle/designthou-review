'use client';
import { createClient } from '@/supabase/client';

export default function AutoForm({ session }: { session: any | null }) {
	const supabase = createClient();

	const checkIsLogin = async () => {
		const auth = await supabase.auth.getSession();
		const { session } = auth.data;

		return session;
	};

	checkIsLogin();

	const signInWithGithub = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: 'http://localhost:3000',
			},
		});
		console.log(error);
	};

	const signOut = async () => {
		const { error } = await supabase.auth.signOut();
		console.log(error);
	};

	return (
		<form>
			<input type="email" placeholder="이메일을 입력하세요" />
			{session ? (
				<button onClick={signInWithGithub}>{'로그인'}</button>
			) : (
				<button onClick={signOut}>{'로그아웃'}</button>
			)}
			{/* <button onClick={signOut}>{'로그아웃'}</button> */}
		</form>
	);
}
