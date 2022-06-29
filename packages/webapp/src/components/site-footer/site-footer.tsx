/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import * as pkg from '@/../package.json'

export type SiteFooterProps = {
	//
}

const SiteFooter = (props?: SiteFooterProps) => {
	return (
		<div className='flex flex-row justify-between opacity-20 hover:opacity-100 transition-opacity duration-150'>
			<span className='p-2'>Hello world.</span>
			<span className='p-2'>
				Version {pkg.version}-{import.meta.env.VITE_BUILD_VERSION_HASH}
			</span>
		</div>
	)
}

export default SiteFooter
