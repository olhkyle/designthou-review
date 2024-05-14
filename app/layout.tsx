import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { RootProvider } from '@/components';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Next Designthou',
	description: 'Architecture Platform DesignThou Next Generation Application',
	openGraph: {
		title: 'Next Designthou',
		description: 'Architecture Platform DesignThou Next Generation Application',
		type: 'website',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<head>
				<link rel="icon" sizes="any" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
				/>
				<meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)" />
				<meta name="theme-color" content="#090b16" media="(prefers-color-scheme: dark)" />
			</head>
			<body className={poppins.className}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
