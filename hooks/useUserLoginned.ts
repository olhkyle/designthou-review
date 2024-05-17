import userState from '@/recoil/atom/userState';
import { useRecoilValue } from 'recoil';

const useUserLoggined = () => {
	const user = useRecoilValue(userState);

	return { user, isLoginned: user !== null };
};

export default useUserLoggined;
