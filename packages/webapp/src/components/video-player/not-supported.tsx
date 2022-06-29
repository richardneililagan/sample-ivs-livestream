/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

export type NotSupportedProps = {
	message?: string
}

const NotSupported = (props?: NotSupportedProps) => {
	const _message = props?.message || 'Video player is not supported.'
	return <div>{_message}</div>
}

export default NotSupported
