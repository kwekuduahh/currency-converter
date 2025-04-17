module.exports = {
	root: true,
	extends: [
		'react-app', // CRA baseline
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended', // runs Prettier as an ESLint rule, and turns off conflicts
	],
	rules: {
		// your team’s overrides, e.g.:
		'react/prop-types': 'off',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
