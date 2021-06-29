import styles from './header.module.scss'
import logo from '../../assets/icons/aerolab-logo.svg'
import coin from '../../assets/icons/coin.svg'
import PropTypes from 'prop-types'
export const Header = ({ background }) => {
	let points = 6000
	let username = 'Gianluca'
	return (
		<header className={styles.main}>
			<div className={styles.header}>
				<img src={logo} className={styles.logo} />
				<div className={styles.info}>
					<p className={styles.user}>{username}</p>
					<div className={styles.points}>
						<p>{points}</p>
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
