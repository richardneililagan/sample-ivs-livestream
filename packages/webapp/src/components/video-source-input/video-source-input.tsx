/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import React from 'react'

export type VideoSourceInputProps = {
	value: string
	handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const VideoSourceInput = (props: VideoSourceInputProps) => {
	return (
		<label className='w-full lg:w-2/3 flex flex-col gap-2 items-center'>
			<input
				type='text'
				className='w-full bg-slate-800 bg-opacity-40 border-slate-700'
				value={props.value}
				onChange={props.handleChange}
			/>
			<span className='text-sm'>Video source URL</span>
		</label>
	)
}

export default VideoSourceInput
