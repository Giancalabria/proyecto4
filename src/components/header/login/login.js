import styles from './login.module.scss'
import { Input } from '../../input/input'
import { Button } from '../../button/button'
import { useState } from 'react'
import PropTypes from 'prop-types'
export const Login = ({ setAdminMode, setLoginAdmin }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const verify = () => {
		if (username === 'admin' && password === 'admin') {
			setAdminMode(true)
			setLoginAdmin(false)
		} else {
			alert('Usuario/Contraseña incorrecta/s')
			setLoginAdmin(false)
		}
	}
	return (
		<div className={styles.adminDiv}>
			<Button
				content='X'
				name='close'
				variant='secondary'
				className={styles.close}
				onClick={() => setLoginAdmin(false)}
			/>
			<div className={styles.adminFlex}>
				<Input
					label='Usuario'
					name='user'
					value={username}
					onChange={({ target }) => setUsername(target.value)}
				/>

				<Input
					label='Contraseña'
					name='password'
					value={password}
					onChange={({ target }) => setPassword(target.value)}
					type='password'
				/>

				<Button
					className={styles.login}
					onClick={() => verify()}
					content='Iniciar sesion'
				/>
			</div>
		</div>
	)
}

Login.propTypes = {
	setAdminMode: PropTypes.func,
	setLoginAdmin: PropTypes.func,
}
