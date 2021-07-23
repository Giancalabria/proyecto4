import { BASE_URL, headers } from './constants'
import PropTypes from 'prop-types'

export const redeemProduct = async (redeemId, setIsError) => {
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
		await setIsError(false)
		return data
	} catch (error) {
		setIsError(true)
		console.log(error)
	}
	return
}

redeemProduct.propTypes = {
	redeemId: PropTypes.string,
}
