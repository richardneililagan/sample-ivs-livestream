/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import * as icons from 'react-feather'
import { QrReader } from 'react-qr-reader'

// :: ---

export type QrCodeReaderModalProps = {
	onResult: (text: string) => void
	onClose: () => void
}

const QrCodeReaderModal = (props: QrCodeReaderModalProps) => {
	return (
		<div className='p-2 fixed inset-0 bg-slate-900 bg-opacity-95 z-50 flex flex-col gap-8 justify-center items-center'>
			<div className='aspect-square w-full md:w-1/3 border border-slate-800 bg-slate-900'>
				<QrReader
					constraints={{ facingMode: 'environment' }}
					videoStyle={{ objectFit: 'cover' }}
					onResult={(result) => {
						if (!!result) {
							props.onResult(result.getText())
							props.onClose()
						}
					}}
				/>
			</div>
			<button
				className='border-2 border-red-400 p-4 rounded-full text-red-400'
				onClick={props.onClose}
			>
				<icons.X />
			</button>
		</div>
	)
}

export default QrCodeReaderModal
