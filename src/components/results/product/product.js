import styles from './product.module.scss'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Context } from '../../../context/context'
export const Product = ({ url, name, category, id }) => {
	const { currentPage } = useContext(Context)

	if (currentPage === 0) {
		return (
			<div
				className={`${styles.product} ${
					id < 16 ? styles.visible : styles.invisible
				}`}
			>
				<div className={styles.container}>
					<img className={styles.photo} src={url} alt='producto' />
				</div>
				<div className={styles.description}>
					<h4 className={styles.category}>{category}</h4>
					<h4 className={styles.name}>{name}</h4>
				</div>
			</div>
		)
	} else if (currentPage === 1) {
		return (
			<div
				className={`${styles.product} ${
					id >= 16 ? styles.visible : styles.invisible
				}`}
			>
				<div className={styles.container}>
					<img className={styles.photo} src={url} alt='producto' />
				</div>
				<div className={styles.description}>
					<h4 className={styles.category}>{category}</h4>
					<h4 className={styles.name}>{name}</h4>
				</div>
			</div>
		)
	}
}

Product.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	category: PropTypes.string,
	id: PropTypes.number,
}
