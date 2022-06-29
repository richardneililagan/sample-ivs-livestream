/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import { useRef, useEffect } from 'react'
import hls from 'hls.js'

import NotSupported from './not-supported'

// :: ---

export type StandardPlayerProps = {
	src?: string
	showControls?: boolean
}

export const StandardPlayer = (props: StandardPlayerProps) => {
	const videoElement = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		if (!videoElement.current) return
		if (!props.src) return
		// :: ---

		const _player = new hls()
		_player.attachMedia(videoElement.current)

		_player.loadSource(props.src)
		videoElement.current.play()
	}, [props.src, videoElement.current])

	// :: ---

	if (!hls.isSupported())
		return <NotSupported message='HLS decoding is not supported.' />

	return (
		<div className='aspect-video bg-slate-900 w-full flex justify-center items-center border lg:border-slate-800'>
			<video
				ref={videoElement}
				className='w-full'
				muted={true}
				controls={props.showControls}
			/>
		</div>
	)
}
