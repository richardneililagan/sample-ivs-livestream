/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import { useEffect, useState } from 'react'

// :: ---

/**
 * Updates a value only after a delay passes without the value changing again.
 * @param value React state value.
 * @param delay Debounce timeout in milliseconds.
 *
 * @see https://usehooks-ts.com/react-hook/use-debounce
 */
function useDebounce<T>(value: T, delay = 500): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay)
		return () => clearTimeout(timer)
	}, [value, delay])

	return debouncedValue
}

export default useDebounce
