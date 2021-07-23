import { BASE_URL, headers } from './constants'
import PropTypes from 'prop-types'

export const redeemProduct = async (redeemId) => {
	const bodyData = {
		productId: redeemId,
	}
	try {
		const response = await fetch(BASE_URL + 'redeem', {
			headers,
			method: 'POST',
			body: JSON.stringify(bodyData),
		})
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}

redeemProduct.propTypes = {
	redeemId: PropTypes.string,
}
