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
	title: 'DesignThou Review',
	description: 'Architecture Platform DesignThou Live Reviews',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<head>
				<link rel="icon" sizes="any" href="/favicon.ico" />
				<meta name="description" content="Designthou Review App" />
				<meta property="og:title" content="Designthou Review" />
				<meta property="og:description" content="Designthou Review App" />
				<meta property="og:type" content="website" />
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
