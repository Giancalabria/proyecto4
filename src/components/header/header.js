import styles from './header.module.scss'
import logo from '../../assets/icons/aerolab-logo.svg'
import coin from '../../assets/icons/coin.svg'
import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { getUser } from '../../services/users'
import { Context } from '../../context/context'
import { addPoints } from '../../services/points'
import { Login } from './login/login'
import { Admin } from './admin/admin'
import { Button } from '../button/button'
export const Header = ({ background }) => {
	const { user, setUser, redeemedProduct } = useContext(Context)
	const [adminMode, setAdminMode] = useState(false)
	const [points, setPoints] = useState()
	const [loginAdmin, setLoginAdmin] = useState(false)
	const [AddPoints, setAddPoints] = useState(0)
	useEffect(() => {
		getUser()
			.then((user) => setUser(user))
			.then(() => setPoints(user.points))
	}, [AddPoints, user.name, user.points, redeemedProduct])

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
		if (loginAdmin) {
			setLoginAdmin(false)
		} else if (loginAdmin === false) {
			setLoginAdmin(true)
		}
	}

	useEffect(() => {
		if (adminMode === true) {
			setLoginAdmin(false)
		}
	}, [adminMode, loginAdmin])

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
				<Button
					content='Redeem history'
					variant='primary'
					className={`${styles.button}`}
					onClick={() => alert('Hola')}
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
				<Login setAdminMode={setAdminMode} setLoginAdmin={setLoginAdmin} />
			)}
			{adminMode && (
				<Admin setAdminMode={setAdminMode} setAddPoints={setAddPoints} />
			)}
		</header>
	)
}

Header.propTypes = {
	background: PropTypes.string,
}
