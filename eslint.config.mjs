import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Import plugins
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPreferArrow from 'eslint-plugin-prefer-arrow';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginSortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    ignores: [],
  },
  ...compat.extends('prettier', 'next/core-web-vitals', 'plugin:tailwindcss/recommended'),
  {
    plugins: {
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
      'prefer-arrow': eslintPluginPreferArrow,
      react: eslintPluginReact,
      'sort-destructure-keys': eslintPluginSortDestructureKeys,
      tailwindcss: eslintPluginTailwindcss,
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'prettier/prettier': 'warn',
      'arrow-body-style': ['warn', 'as-needed'],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: ['return', 'throw'] },
        { blankLine: 'always', prev: '*', next: ['block-like', 'class'] },
        { blankLine: 'always', prev: ['block-like', 'class'], next: '*' },
        { blankLine: 'any', prev: '*', next: ['case', 'default'] },
        { blankLine: 'always', prev: ['var', 'let', 'const'], next: '*' },
        {
          blankLine: 'any',
          prev: ['var', 'let', 'const'],
          next: ['var', 'let', 'const'],
        },
      ],
      'prefer-arrow/prefer-arrow-functions': [
        'warn',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
    },
  },
];

export default eslintConfig;
