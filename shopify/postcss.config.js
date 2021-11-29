const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss/nesting')(require('postcss-nesting')),
		require('tailwindcss'),
		isProduction ? require('cssnano')({ preset: 'default' }) : null,
		isProduction ? require('autoprefixer') : null,
	].filter(Boolean),
}
