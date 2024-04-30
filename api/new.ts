import { Database } from '@/supabase/schema';
import { createClient } from '@/supabase/server';
import { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
	reviews?: Database[];
	error?: any;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	try {
		const supabase = createClient();
		const { data: reviews, error } = await supabase.from('reviews').select('*');

		if (!reviews) {
			throw error;
		}

		res.status(200).json({ reviews });
	} catch (e) {
		console.error(e);
		res.status(500).json({ error: 'Internal server error' });
	}
}
