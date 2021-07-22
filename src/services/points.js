import { BASE_URL, headers } from './constants'

export const addPoints = async () => {
	try {
		const response = await fetch(BASE_URL + 'points', { headers })
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}
