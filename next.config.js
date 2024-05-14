/** @type {import('next').NextConfig} */

const SUPABASE_IMG_SOURCE_URL = 'ojedrtpbarwuhwbzthpe.supabase.co';

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'designthou.com',
			},
			{
				protocol: 'https',
				hostname: SUPABASE_IMG_SOURCE_URL,
			},
		],
	},
};

module.exports = nextConfig;
