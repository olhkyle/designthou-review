/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				black: 'var(--color-black)',
				white: 'var(--color-white)',
				gray: {
					10: 'var(--color-transparent-bgColor-hover)',
					50: 'var(--color-gray-50)',
					100: 'var(--color-gray-100)',
					200: 'var(--color-gray-200)',
					300: 'var(--color-gray-300)',
					400: 'var(--color-gray-400)',
					500: 'var(--color-gray-500)',
					600: 'var(--color-gray-600)',
					700: 'var(--color-gray-700)',
					800: 'var(--color-gray-800)',
					900: 'var(--color-gray-900)',
				},
				green: {
					100: 'var(--color-green-100)',
					200: 'var(--color-green-200)',
					300: 'var(--color-green-300)',
					400: 'var(--color-green-400)',
				},
				blue: {
					50: 'var(--color-blue-50)',
					100: 'var(--color-blue-100)',
					200: 'var(--color-blue-200)',
					300: 'var(--color-blue-300)',
				},
				purple: 'var(--color-purple)',
				orange: {
					100: 'var(--color-orange-100)',
					200: 'var(--color-orange-200)',
				},
				red: 'var(--color-red)',
				dark: 'var(--color-dark)',
				highlight: 'var(--color-highlight-bg)',
			},
			fontFamily: {
				sans: ['Poppins', 'Spoqa Han Sans Neo', 'sans-serif', ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
