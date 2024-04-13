import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/common/Nav';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				<div id="wrap" className="mx-auto md:w-[768px]">
					<Nav />
					<main className="px-[1rem] ">{children}</main>
				</div>
			</body>
		</html>
	);
}
