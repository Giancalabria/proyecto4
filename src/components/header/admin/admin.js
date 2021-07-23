import styles from './admin.module.scss'
import { Button } from '../../button/button'
import PropTypes from 'prop-types'
export const Admin = ({ setAddPoints, setAdminMode }) => {
	return (
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
	)
}

Admin.propTypes = {
	setAdminMode: PropTypes.func,
	setAddPoints: PropTypes.func,
}
