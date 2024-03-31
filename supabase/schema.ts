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
				};
				Insert: {
					id?: never;
					userId: string;
					title?: string;
					content?: string;
					imgSrc?: string;
				};
				Update: {
					id?: never;
					userId: string;
					title?: string;
					content?: string;
					imgSrc?: string;
				};
			};
		};
	};
}