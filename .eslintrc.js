/** @format */

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:prettier/recommended', 'eslint-config-prettier'],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint', // this parser is usually used instead of espree, the eslint default one. We can change it later and adjust the rules, if necessary
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': [2, { ignore: ['.jpg$', '.png$'] }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'prettier/prettier': 2,
    'react/prop-types': [1, { ignore: ['style', 'children', 'dispatch'] }], // 0 off, 1 warning, 2 error, set as warning for now until we define the proptypes standard, also ignoring some keywords
    'react/forbid-prop-types': 0,
    'no-nested-ternary': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'no-restricted-syntax': ['warn', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-use-before-define': ['off'],
  },
};
