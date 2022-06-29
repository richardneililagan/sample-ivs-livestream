/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import { useRef, useState, useEffect } from 'react'
import hls from 'hls.js'

import NotSupported from './not-supported'

// :: ---

export type StandardPlayerProps = {
	src?: string
}

export const StandardPlayer = (props: StandardPlayerProps) => {
	const videoElement = useRef<HTMLVideoElement>(null)

	const [player] = useState(() => {
		const _player = new hls()
		_player.on(hls.Events.MEDIA_ATTACHED, () =>
			console.log('HLS attached to video element.')
		)

		return _player
	})

	useEffect(() => {
		if (!videoElement.current) return
		// :: ---

		player.attachMedia(videoElement.current)

		return () => player.detachMedia()
	}, [player, videoElement.current])

	useEffect(() => {
		if (!player) return
		if (!props.src) return
		if (!videoElement.current) return
		// :: ---

		player.loadSource(props.src)
		videoElement.current.play()
	}, [player, props.src, videoElement.current])

	// :: ---

	if (!hls.isSupported())
		return <NotSupported message='HLS decoding is not supported.' />

	return (
		<div className='aspect-video bg-slate-900 w-full flex justify-center items-center border lg:border-slate-800'>
			<video
				ref={videoElement}
				className='w-full'
				muted={true}
				controls={true}
			/>
		</div>
	)
}
