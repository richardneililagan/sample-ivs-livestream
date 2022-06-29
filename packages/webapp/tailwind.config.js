/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

/* eslint-disable unicorn/prefer-module */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		//
		'./index.html',
		'./src/**/*.{ts,js,tsx,jsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: 'IBM Plex Sans',
				mono: 'IBM Plex Mono',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
