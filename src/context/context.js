import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

export default function ContextProvider({ children }) {
	const [user, setUser] = useState({})
	const [products, setProducts] = useState([])
	const [currentPage, setCurrentPage] = useState(0)
	const [currentFilter, setCurrentFilter] = useState()
	const [redeemedProduct, setRedeemedProduct] = useState(false)
	const [isError, setIsError] = useState(false)
	const [showRedeemMessage, setShowRedeemMessage] = useState(false)
	return (
		<Context.Provider
			value={{
				user,
				setUser,
				products,
				setProducts,
				currentPage,
				setCurrentPage,
				currentFilter,
				setCurrentFilter,
				redeemedProduct,
				setRedeemedProduct,
				isError,
				setIsError,
				showRedeemMessage,
				setShowRedeemMessage,
			}}
		>
			{children}
		</Context.Provider>
	)
}

ContextProvider.propTypes = {
	children: PropTypes.node,
}
