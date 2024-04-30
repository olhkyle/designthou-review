export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			reviews: {
				Row: {
					id: number;
					userId: string;
					title: string;
					content: string;
					imgSrc: string;
					course: string;
				};
				Insert: {
					id?: never;
					userId: string;
					title?: string;
					content?: string;
					imgSrc?: string;
					course: string;
				};
				Update: {
					id?: never;
					userId: string;
					title?: string;
					content?: string;
					imgSrc?: string;
					course: string;
				};
			};
			users: {
				Row: {
					userId: number;
					role: string;
					userEmail: string;
					userLoginned: string;
					username: string;
					nickname: string;
				};
				Insert: {
					userId: number;
					role: string;
					userEmail: string;
					userLoginned: string;
					username: string;
					nickname: string;
				};
				Update: {
					userId: number;
					role: string;
					userEmail: string;
					userLoginned: string;
					username: string;
					nickname: string;
				};
			};
		};
	};
}
