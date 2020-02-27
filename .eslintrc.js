module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
    // 'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier':'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js']}
    ],
    'import/prefer-default-export':'off',

    'react/prefer-stateless-function':'off',
    'react/state-in-constructor':'off',
    'react/destructuring-assignment':'off',
    'camelcase' : 'off',
    'react/prop-types':'off',
    'no-param-reassign':'off',
    'react/jsx-props-no-spreading':'off'
  },
};
