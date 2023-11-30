module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/no-unescaped-entities': ['warn'],
    'no-underscore-dangle': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-void': ['off'],
    'lines-between-class-members': ['off'],
    'consistent-return': ['off'],
    'no-useless-return': ['off'],
    'max-len': ['off'],
    '@typescript-eslint/no-explicit-any': ['error'],
    'no-undef': ['off'],
    'react/no-unused-prop-types': ['off'],
    'class-methods-use-this': ['off'],
    'no-nested-ternary': ['off'],
    indent: ['off'],
    'react/require-default-props': ['off'],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          { pattern: '~/**', group: 'internal' },
          { pattern: './**', group: 'sibling' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@react-navigation/native',
            importNames: ['useRoute', 'useNavigation', 'useTheme'],
            message:
              'Please import useNavigation / useRoute / useTheme from ~/navigation instead.',
          },
        ],
      },
    ],
  },
};
