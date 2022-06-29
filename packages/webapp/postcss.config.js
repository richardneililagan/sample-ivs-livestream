/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */
/* eslint-disable unicorn/prefer-module */
module.exports = {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		tailwindcss: {},
		autoprefixer: {},

		// :: Minify CSS files in production.
		...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
	},
}
