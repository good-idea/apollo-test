module.exports = {
	theme: {
		colors: {
			neutral: {
				/* white */
				100: '#fff',
				/* lightest-gray */
				200: '#e3e5e5',
				/* lighter-gray */
				300: '#c8cbcc',
				/* middle-gray */
				400: '#626566',
				/* darker-gray */
				500: '#3d4244',
				/* darkest-gray */
				600: '#191f21',
				/* black */
				700: '#000',
			},
		},
		/* https://www.figma.com/file/5Ips5xNtk6FbCcbdkyGQuf/Apollo%3A-Design-System?node-id=67%3A87 */
		spacing: {
			'5xl': '96px',
			'4xl': '80px',
			'3xl': '64px',
			'2xl': '56px',
			'1xl': '48px',
			'1xl': '48px',
			l: '32px',
			m: '24px',
			s: '16px',
			xs: '8px',
			'2xs': '4px',
			'3xs': '2px',
		},
		/* https://www.figma.com/file/5Ips5xNtk6FbCcbdkyGQuf/Apollo%3A-Design-System?node-id=56%3A126 */
		fontFamily: {
			sans: [
				'Basis Grotesque',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
		},
		fontSize: {
			/* Use these as defaults - they are the "mobile" sizes from the design docs */
			h1: '30px',
			h2: '22px',
			h3: '20px',
			h4: '14px',
			d1: '40px',
			d2: '28px',
			d3: '20px',
			d4: '20px',
			p1: '16px',
			p2: '14px',
			p3: '14px',
			u1: '14px',
			u2: '14px',
			u3: '14px',

			/* Use these for the tablet + up sizes */
			/* example: className="h1 md:l-h1" */
			'l-h1': '64px',
			'l-h2': '28px',
			'l-h3': '22px',
			'l-h4': '18px',
			'l-d1': '96px',
			'l-d2': '64px',
			'l-d3': '48px',
			'l-d4': '28px',
			'l-p1': '20px',
			'l-p2': '18px',
			'l-p3': '16px',
			'l-u1': '18px',
			'l-u2': '16px',
			'l-u3': '14px',
		},
		backgroundImage: {
			'surface-night':
				'radial-gradient(118.53% 117.18% at -16.46% 113.75%, #1F0E35 0%, #122136 53.93%, #0A2626 100%)',
			'surface-twilight':
				'linear-gradient(360deg, #312D2A -4.27%, #081324 119.79%)',
			'surface-noon':
				'radial-gradient(100.67% 217.14% at 100% 100%, rgba(0, 126, 218, 0.2) 0%, rgba(217, 243, 238, 0.2) 100%), radial-gradient(115.46% 113.25% at -31.67% -28.75%, #B3FAF1 1.24%, #EBF1F3 99.33%)',
			'surface-haze':
				'radial-gradient(147.39% 150.53% at -15.63% 117.53%, #F7F6ED 0%, #F5F5F0 52.53%, #F2F5FA 100%)',
			'surface-navy': 'linear-gradient(to top, #1D2A30, #1D2A30)',
			'surface-sand': 'linear-gradient(to top, #eeece6, #eeece6)',
			'mode-energy':
				'radial-gradient(204.04% 204.04% at 0% 100%, #FFCA73 0%, #FD504E 100%)',
			'mode-social':
				'radial-gradient(100% 100% at 100% 0%, #F459FF 0%, #017888 100%)',
			'mode-clear':
				'radial-gradient(100% 100% at 100% 0%, #2FF2CF 0%, #001F8D 100%)',
			'mode-rebuild':
				'radial-gradient(100% 100% at 100% 0%, #95F699 0%, #0F67B8 100%)',
			'mode-meditation':
				'radial-gradient(100% 100% at 100% 0%, #6AF6FF 0%, #4E11B2 100%)',
			'mode-relax':
				'radial-gradient(100% 100% at 100% 0%, #D68F69 0%, #1163DF 100%)',
			'mode-sleep':
				'radial-gradient(102.92% 101.65% at 100% 0%, #EDBD90 0%, #1D1DAA 100%)',
		},
	},
	purge: ['./theme', './src'],
}
