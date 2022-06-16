const header = `!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 `

const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    jsx: true,
  },

  env: {
    jest: true,
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],

  plugins: ['header'],

  rules: {
    'header/header': [2, 'block', header],

    '@typescript-eslint/no-empty-interface': 'off',
    'unicorn/no-null': 'off',

    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          env: false,
          props: false,
          params: false,
        },
      },
    ],
  },
}

module.exports = config
