import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

export default function ContextProvider({ children }) {
	const [user, setUser] = useState({})
	const [products, setProducts] = useState([])

	// let totalProduct = product.length

	return (
		<Context.Provider value={{ user, setUser, products, setProducts }}>
			{children}
		</Context.Provider>
	)
}

ContextProvider.propTypes = {
	children: PropTypes.node,
}
