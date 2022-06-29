/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import { useState } from 'react'
import useDebounce from '@/hooks/use-debounce'

import * as player from '@/components/video-player'

// :: ---

export type ComparisonDemoViewProps = {
	//
}

const ComparisonDemoView = (props: ComparisonDemoViewProps) => {
	const [sourceUrl, setSourceUrl] = useState(
		import.meta.env.VITE_STATIC_STREAM_URL
	)

	const debouncedSourceUrl = useDebounce(sourceUrl, 1000)

	return (
		<div className='flex flex-col gap-4 items-center justify-center h-full'>
			<div className='p-4 flex flex-row gap-2 w-full'>
				<div className='flex-grow w-1/2'>
					<player.StandardPlayer src={debouncedSourceUrl} />
				</div>
				<div className='flex-grow w-1/2'>
					<player.IvsPlayer src={debouncedSourceUrl} />
				</div>
			</div>

			<label className='w-full lg:w-2/3 flex flex-col gap-2 items-center'>
				<input
					type='text'
					className='w-full bg-slate-800 bg-opacity-40 border-slate-700'
					value={sourceUrl}
					onChange={(event) => setSourceUrl(event.target.value)}
				/>
				<span className='text-sm'>Video source URL</span>
			</label>
		</div>
	)
}

export default ComparisonDemoView
