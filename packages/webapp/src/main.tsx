/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */
import React from 'react'
import ReactDOM from 'react-dom/client'

import AppRoot from '@/components/approot'

import './index.css'

// :: ---

const _rootElement = document.querySelector('#root')
if (!_rootElement) throw new Error('Root element not found in document.')

ReactDOM.createRoot(_rootElement).render(
	<React.StrictMode>
		<AppRoot />
	</React.StrictMode>
)
