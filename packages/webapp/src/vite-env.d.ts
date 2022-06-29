/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_STATIC_STREAM_URL: string
	readonly VITE_BUILD_VERSION_HASH: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
