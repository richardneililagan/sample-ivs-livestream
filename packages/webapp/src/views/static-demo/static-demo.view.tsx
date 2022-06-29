/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import * as player from '@/components/video-player'

export type StaticDemoViewProps = {
	//
}

const StaticDemoView = (props?: StaticDemoViewProps) => {
	return (
		<div className='flex items-center justify-center h-full'>
			<div className='w-full h-fit lg:w-2/3'>
				<player.IvsPlayer src={import.meta.env.VITE_STATIC_STREAM_URL} />
			</div>
		</div>
	)
}

export default StaticDemoView
