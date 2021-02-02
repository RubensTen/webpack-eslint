module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.client.json'
  },
  rules: {
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 0,
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
  },
  settings: {
    react: {
      version: 'detect',
    }
  },
};