/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'designthou.com',
				pathname: '/wp-content/uploads/kboard_attached',
			},
		],
	},
};

module.exports = nextConfig;
