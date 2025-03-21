import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

/** @type {import('eslint').Linter.Config[]} */
export default [
  eslintPluginPrettierRecommended,
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      eqeqeq: 'off',
      'no-unused-vars': 'error',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'no-unused-expressions': 'error',
      'no-undef': 'error',
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
    },
    globals: {
      process: 'readonly',
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
