/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			fontFamily: {
				markazi: "'Markazi Text', serif"
			},
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
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'h1,h2,h3,h4,h5,h6': {
							fontFamily: "'Markazi Text', serif",
							color: theme('colors.blue.500')
						},
						a: {
							color: theme('colors.blue.600')
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
