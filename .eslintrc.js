// configuring eslint for typescript, react and prettier
// https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'spaced-comment': ['warn', 'always'],
        'prettier/prettier': 'warn',
        'react/prop-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ],
  // plugins are added by the extended configs
  // plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'spaced-comment': ['warn', 'always'],
    'prettier/prettier': 'warn'
  }
};
