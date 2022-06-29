/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TopNavigation from '@/components/top-navigation'
import SiteFooter from '@/components/site-footer'
import HomeView from '@/views/home'

// :: ---

export type AppRootProps = {
	//
}

const AppRoot = (props?: AppRootProps) => {
	return (
		<div role='main' className='h-full flex flex-col'>
			<header>
				<TopNavigation />
			</header>

			<section className='flex-grow'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<HomeView />} />
					</Routes>
				</BrowserRouter>
			</section>

			<footer>
				<SiteFooter />
			</footer>
		</div>
	)
}

export default AppRoot
