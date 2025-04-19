// .eslintrc.js
export default {
	root: true,
	env: {
		browser: true,
		es2020: true,
	},
	parserOptions: {
		ecmaVersion: 2020, // modern syntax
		sourceType: 'module', // allow imports
		ecmaFeatures: { jsx: true }, // support JSX
	},
	globals: {
		module: 'readonly',
	},
	settings: {
		react: { version: 'detect' }, // automatically detect React version
		'import/resolver': { typescript: {} },
	},
	extends: [
		'eslint:recommended', // catch core JS issues
		'plugin:react/recommended', // React best practices
		'plugin:react-hooks/recommended', // Enforce the Rules of Hooks
		'plugin:jsx-a11y/recommended', // Accessibility checks
		'plugin:import/errors', // import/export errors
		'plugin:import/warnings',
		'plugin:prettier/recommended', // integrate Prettier
	],
	plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
	rules: {
		// === React ===
		'react/jsx-key': 'error', // <li> without keys is a common bug
		'react/function-component-definition': [
			'error',
			{ namedComponents: 'arrow-function' },
		],

		// === Hooks ===
		'react-hooks/rules-of-hooks': 'error', // 🔒 Hooks must only be called at top level
		'react-hooks/exhaustive-deps': 'warn', // ensure effect deps are complete

		// === Imports ===
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'always',
			},
		],
		'import/no-unresolved': 'error',
		'import/no-cycle': 'warn',

		// === Best practices / style ===
		eqeqeq: ['error', 'always'], // always use ===/!==
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-var': 'error', // prefer let/const
		'prefer-const': 'error',
		curly: ['error', 'all'], // always use braces
		'prettier/prettier': 'error', // formatting errors as ESLint errors
	},
};
