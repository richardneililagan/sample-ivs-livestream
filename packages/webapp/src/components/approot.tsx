/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import TopNavigation from '@/components/top-navigation'
import SiteFooter from '@/components/site-footer'

import HomeView from '@/views/home'
import StaticDemoView from '@/views/static-demo'
import LiveDemoView from '@/views/live-demo'
import ComparisonDemoView from '@/views/comparison-demo/comparison-demo.view'

// :: ---

export type AppRootProps = {
	//
}

const AppRoot = () => {
	return (
		<BrowserRouter>
			<div role='main' className='h-full flex flex-col'>
				<header>
					<TopNavigation />
				</header>

				<section className='flex-grow'>
					<Routes>
						<Route path='/' element={<HomeView />} />
						<Route path='/a/static' element={<StaticDemoView />} />
						<Route path='/a/live' element={<LiveDemoView />} />
						<Route path='/a/compare' element={<ComparisonDemoView />} />

						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</section>

				<footer>
					<SiteFooter />
				</footer>
			</div>
		</BrowserRouter>
	)
}

export default AppRoot
