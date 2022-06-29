/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as icons from 'react-feather'
import clsx from 'clsx'

export type TopNavigationProps = {
	//
}

const TopNavigation = (props?: TopNavigationProps) => {
	const [isMenuVisible, setIsMenuVisible] = useState(false)

	const menuClass = clsx([
		'md:gap-4 justify-start md:justify-center items-start md:items-center transition-transform',
		'flex flex-col md:flex-row',
		'w-1/2 h-screen md:h-fit md:w-auto',
		'fixed top-0 left-0 md:static md:top-auto md:left-auto',
		'border-r border-gray-700 md:border-0',
		'bg-gray-800 md:bg-transparent',
		'shadow shadow-lg md:shadow-none',
		{ '-translate-x-full md:transform-none': !isMenuVisible },
	])

	return (
		<nav className='flex flex-row gap-8 w-full md:opacity-20 hover:opacity-100 transition-opacity duration-150 z-10 relative items-center'>
			<a
				className='p-2 absolute z-0 md:hidden'
				onClick={() => setIsMenuVisible(true)}
			>
				<icons.Menu />
			</a>

			<h2 className='p-2 text-2xl w-full md:w-fit text-center md:text-left uppercase font-black'>
				<Link to='/'>Livestreem</Link>
			</h2>

			<ul className={menuClass}>
				<li className='p-4 md:hidden'>
					<a onClick={() => setIsMenuVisible(false)}>
						<icons.ArrowLeft />
					</a>
				</li>
				<li className='p-4'>
					<Link to='a/static'>Static Demo</Link>
				</li>
				<li className='p-4'>
					<Link to='a/live'>Live Demo</Link>
				</li>
				<li className='p-4'>
					<Link to='a/compare'>Comparison</Link>
				</li>
			</ul>
		</nav>
	)
}

export default TopNavigation
