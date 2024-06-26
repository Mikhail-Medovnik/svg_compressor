module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
  },

  overrides: [
    {
      files: ['**/worker.ts'],
      rules: {
        'no-restricted-globals': 'off',
      },
    },
  ],
};
