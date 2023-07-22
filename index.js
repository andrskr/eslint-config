require('@rushstack/eslint-patch/modern-module-resolution');

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config} */

module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['pnpm-lock.yaml'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'plugin:unicorn/all',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:jsdoc/recommended',
    'prettier',
  ],
  plugins: ['react-refresh'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}', '.prettierrc.{js,cjs}'],
      env: {
        node: true,
      },

      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      extends: ['plugin:yml/standard'],
      rules: {
        'spaced-comment': 'off',
        'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
        'yml/no-empty-document': 'off',
      },
    },
    {
      files: ['*.md', '*.mdx'],
      extends: ['plugin:markdown/recommended'],
      // Code blocks in markdown file
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        'import/no-unresolved': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      extends: ['plugin:jsonc/recommended-with-jsonc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['package.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import'],
          },
        ],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:jsdoc/recommended-typescript',
        'prettier',
      ],
      rules: {
        'no-unused-vars': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: null,
            selector: 'parameter',
            modifiers: ['unused'],
            leadingUnderscore: 'require',
          },
        ],
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
      },
    },
    {
      files: ['vite.config.ts'],
      env: {
        node: true,
      },
    },
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
      extends: ['plugin:vitest/all', 'plugin:testing-library/react'],
    },
  ],

  rules: {
    'no-console': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'prefer-arrow-callback': 'off',

    'import/no-absolute-path': 'off',
    'import/prefer-default-export': 'off',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/no-extraneous-dependencies': 'off',

    'unicorn/no-null': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          prop: false,
          props: false,
          ref: false,
          refs: false,
          env: false,
        },
      },
    ],
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/no-new-array': 'error',

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    'react/react-in-jsx-scope': 'off',

    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          ArrowFunctionExpression: true,
          FunctionDeclaration: false,
        },
        contexts: ['FunctionDeclaration:not([id.name=/^[A-Z].+/])'],
      },
    ],
  },
};
