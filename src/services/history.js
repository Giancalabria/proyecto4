import { BASE_URL, headers } from './constants'

export const getHistory = async () => {
	try {
		const response = await fetch(BASE_URL + 'user/history', { headers })
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}
