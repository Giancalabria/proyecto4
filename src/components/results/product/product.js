import styles from './product.module.scss'
import PropTypes from 'prop-types'
export const Product = ({ url, name, category }) => {
	return (
		<div className={styles.product}>
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

Product.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	category: PropTypes.string,
}
