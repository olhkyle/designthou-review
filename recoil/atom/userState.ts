import { AtomEffect, atom } from 'recoil';

interface User {
	userId: number;
	role: 'subscriber' | 'administrator';
	userEmail: string;
	userLoggined: string;
	username: string;
	nickname: string;
}

const KEY = 'user';

const localStorageEffect: <T>(key: string) => AtomEffect<T | null> =
	key =>
	({ setSelf, onSet }) => {
		if (typeof window !== 'undefined') {
			const user = window.localStorage.getItem(key);

			if (user !== null) {
				setSelf(JSON.parse(user));
			}
			onSet((newState, _, isReset) => {
				isReset ? localStorage.removeItem(KEY) : localStorage.setItem(key, JSON.stringify(newState));
			});
		}
	};

const userState = atom({
	key: 'userState',
	default: null,
	effects: [localStorageEffect<User>(KEY)],
});

export default userState;
