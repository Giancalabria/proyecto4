import './utils/styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Routes } from './router/router'
import ContextProvider from './context/context'
ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<Routes />
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
