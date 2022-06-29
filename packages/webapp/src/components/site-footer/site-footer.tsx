/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

export type SiteFooterProps = {
	//
}

const SiteFooter = (props?: SiteFooterProps) => {
	return (
		<div className='flex flex-row opacity-20 hover:opacity-100 transition-opacity duration-150'>
			<span className='p-2'>Hello world.</span>
		</div>
	)
}

export default SiteFooter
