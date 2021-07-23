import { BASE_URL, headers } from './constants'
import PropTypes from 'prop-types'

export const addPoints = async (bodyData) => {
	try {
		const response = await fetch(BASE_URL + 'user/points', {
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

addPoints.propTypes = {
	bodyData: PropTypes.number,
}
