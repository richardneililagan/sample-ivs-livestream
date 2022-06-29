/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import React, { useState } from 'react'
import * as icons from 'react-feather'

import QrCodeReaderModal from '@/components/qr-code-reader'

// :: ---

export type VideoSourceInputProps = {
	value: string
	handleChange: (value: string) => void
}

const VideoSourceInput = (props: VideoSourceInputProps) => {
	const [isQrCodeReaderVisible, setIsQrCodeReaderVisible] = useState(false)

	return (
		<>
			<QrCodeReaderModal
				visible={isQrCodeReaderVisible}
				onClose={() => setIsQrCodeReaderVisible(false)}
				onResult={(result) => {
					console.log(result)
					props.handleChange(result)
				}}
			/>

			<label className='px-2 w-full lg:w-2/3 flex flex-col gap-2 items-center'>
				<div className='w-full flex flex-row gap-4'>
					<input
						type='text'
						className='w-full bg-slate-800 bg-opacity-40 border-slate-700'
						value={props.value}
						onChange={(event) => props.handleChange(event.target.value)}
					/>
					<button
						className='px-4 border border-slate-700 bg-slate-800 rounded-full'
						onClick={() => setIsQrCodeReaderVisible(true)}
					>
						<icons.Camera />
					</button>
				</div>
				<span className='text-sm flex-grow'>Video source URL</span>
			</label>
		</>
	)
}

export default VideoSourceInput
