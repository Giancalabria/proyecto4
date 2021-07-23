import styles from './header.module.scss'
import logo from '../../assets/icons/aerolab-logo.svg'
import coin from '../../assets/icons/coin.svg'
import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { getUser } from '../../services/users'
import { Context } from '../../context/context'
import { addPoints } from '../../services/points'
import { Button } from '../button/button'
import { Input } from '../input/input'
export const Header = ({ background }) => {
	const { user, setUser } = useContext(Context)
	const [adminMode, setAdminMode] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [points, setPoints] = useState()
	const [loginAdmin, setLoginAdmin] = useState(false)
	const [AddPoints, setAddPoints] = useState(0)
	useEffect(() => {
		getUser()
			.then((user) => setUser(user))
			.then(() => setPoints(user.points))
	}, [AddPoints, user.name, user.points])

	useEffect(() => {
		if (AddPoints === 1000) {
			const bodyData = {
				amount: 1000,
			}
			addPoints(bodyData).then(() => setAddPoints(0))
		} else if (AddPoints === 5000) {
			const bodyData = {
				amount: 5000,
			}
			addPoints(bodyData).then(() => setAddPoints(0))
		} else if (AddPoints === 7500) {
			const bodyData = {
				amount: 7500,
			}
			addPoints(bodyData).then(() => setAddPoints(0))
		}
	}, [AddPoints])

	const tryLoginAdmin = () => {
		setLoginAdmin(true)
	}

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
		<header className={styles.main}>
			<div className={styles.header}>
				<img src={logo} className={styles.logo} />
				<Button
					content='Admin mode'
					variant='primary'
					className={`${styles.button}`}
					onClick={() => tryLoginAdmin()}
				/>
				<div className={styles.info}>
					<p className={styles.user}>{user.name}</p>
					<div className={styles.points}>
						<p>{points}</p>
						<img src={coin} className={styles.coin} />
					</div>
				</div>
			</div>
			<img src={background} className={styles.background} />
			<h1 className={styles.title}>Electronics</h1>
			{loginAdmin && (
				<div className={styles.adminDiv}>
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
			)}
			{adminMode && (
				<div className={styles.adminDiv}>
					<div className={styles.adminFlex}>
						<Button
							className={styles.enter}
							onClick={() => setAddPoints(1000) + setAdminMode(false)}
							content='Agregar 1000 puntos'
						/>
						<Button
							className={styles.enter}
							onClick={() => setAddPoints(5000) + setAdminMode(false)}
							content='Agregar 5000 puntos'
						/>
						<Button
							className={styles.enter}
							onClick={() => setAddPoints(7500) + setAdminMode(false)}
							content='Agregar 7500 puntos'
						/>
					</div>
				</div>
			)}
		</header>
	)
}

Header.propTypes = {
	background: PropTypes.string,
}
