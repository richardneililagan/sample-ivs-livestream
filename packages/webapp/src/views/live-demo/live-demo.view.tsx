/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */
import { useState } from 'react'

import useDebounce from '@/hooks/use-debounce'
import * as player from '@/components/video-player'
import VideoSourceInput from '@/components/video-source-input'

// :: ---

export type LiveDemoViewProps = {
	//
}

const LiveDemoView = (props: LiveDemoViewProps) => {
	const [sourceUrl, setSourceUrl] = useState(
		import.meta.env.VITE_STATIC_STREAM_URL
	)

	// :: Only update the source URL if we haven't changed it in one full second.
	const debouncedSourceUrl = useDebounce(sourceUrl, 1000)

	return (
		<div className='flex flex-col gap-4 items-center justify-center h-full'>
			<div className='w-full h-fit lg:w-2/3'>
				<player.IvsPlayer src={debouncedSourceUrl} />
			</div>

			<VideoSourceInput
				value={sourceUrl}
				handleChange={(event) => setSourceUrl(event.target.value)}
			/>
		</div>
	)
}

export default LiveDemoView
