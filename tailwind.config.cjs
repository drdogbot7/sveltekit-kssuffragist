/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue: {
					DEFAULT: '#0C569D',
					50: '#C2DFFA',
					100: '#A6D0F8',
					200: '#6DB2F4',
					300: '#3494EF',
					400: '#1075D6',
					500: '#0C569D',
					600: '#0A4985',
					700: '#083C6E',
					800: '#072F56',
					900: '#05223E'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
