import styles from './header.module.scss'
import logo from '../../assets/icons/aerolab-logo.svg'
import coin from '../../assets/icons/coin.svg'
import PropTypes from 'prop-types'
import { useContext, useEffect } from 'react'
import { getUser } from '../../services/users'
import { Context } from '../../context/context'

export const Header = ({ background }) => {
	const { user, setUser } = useContext(Context)
	useEffect(() => {
		getUser().then((user) => setUser(user))
	}, [])

	return (
		<header className={styles.main}>
			<div className={styles.header}>
				<img src={logo} className={styles.logo} />
				<div className={styles.info}>
					<p className={styles.user}>{user.name}</p>
					<div className={styles.points}>
						<p>{user.points}</p>
						<img src={coin} className={styles.coin} />
					</div>
				</div>
			</div>
			<img src={background} className={styles.background} />
		</header>
	)
}

Header.propTypes = {
	background: PropTypes.string,
}
