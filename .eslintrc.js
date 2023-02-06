module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['next', 'plugin:react/recommended', 'standard', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
    // "max-len": ["error", { "code": 80 }]
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
