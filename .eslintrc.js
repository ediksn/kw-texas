/** @format */

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    'plugin:import/typescript'
  ],
  plugins: ['react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/semi': 0,
    'import/no-unresolved': [2, { ignore: ['.jpg$', '.png$'] }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'prettier/prettier': 2,
    'react/prop-types': [0, { ignore: ['style', 'children', 'dispatch'] }], // 0 off, 1 warning, 2 error, set as warning for now until we define the proptypes standard, also ignoring some keywords
    'react/forbid-prop-types': 0,
    'no-nested-ternary': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'no-restricted-syntax': ['warn', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-use-before-define': ['off']
  }
}
