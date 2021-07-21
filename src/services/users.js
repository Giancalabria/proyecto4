import { BASE_URL, headers } from './constants'

export const getUser = async () => {
	try {
		const response = await fetch(BASE_URL + 'user/me', { headers })
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}
