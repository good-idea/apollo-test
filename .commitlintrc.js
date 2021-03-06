module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-max-line-length': [1, 'always', 100],
		'footer-max-line-length': [1, 'always', 500],
		'scope-empty': [2, 'never'],
		'scope-enum': [
			2,
			'always',
			['release', 'repo', 'shopify', 'api', 'scripts'],
		],
	},
}
