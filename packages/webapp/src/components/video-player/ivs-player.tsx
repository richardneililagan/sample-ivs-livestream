/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import { useRef, useState, useEffect } from 'react'
import * as ivs from 'amazon-ivs-player'

import NotSupported from './not-supported'

import work from 'amazon-ivs-player/dist/assets/amazon-ivs-wasmworker.min.js?url'
import wasm from 'amazon-ivs-player/dist/assets/amazon-ivs-wasmworker.min.wasm?url'

// :: ---

export type IvsPlayerProps = {
	src?: string
	showControls?: boolean
}

export const IvsPlayer = (props: IvsPlayerProps) => {
	const videoElement = useRef<HTMLVideoElement>(null)

	const [player] = useState(() =>
		ivs.create({
			wasmWorker: new URL(work, document.URL).toString(),
			wasmBinary: new URL(wasm, document.URL).toString(),
		})
	)

	// :: Point the IVS Player to where in the DOM streaming video should render in.
	useEffect(() => {
		if (!videoElement.current) return
		// :: ---

		player.attachHTMLVideoElement(videoElement.current)
	}, [player, videoElement.current])

	// :: Refresh what the IVS player should be playing if the video source URL changes.
	useEffect(() => {
		if (!player) return
		if (!props.src) return
		// :: ---

		player.load(props.src)
		player.play()
	}, [player, props.src])

	// :: ---

	if (!ivs.isPlayerSupported)
		return <NotSupported message='Amazon IVS Player is not supported.' />

	return (
		<div className='aspect-video bg-slate-900 w-full flex justify-center items-center border lg:border-slate-800'>
			<video
				ref={videoElement}
				className='w-full'
				muted={true}
				autoPlay={true}
				controls={props.showControls}
			/>
		</div>
	)
}
