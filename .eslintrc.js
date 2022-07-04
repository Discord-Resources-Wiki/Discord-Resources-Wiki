module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/react',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
		ecmaVersion: 12,
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 'off',
	},
	settings: {
		'react': {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
			},
		},
	},
};
