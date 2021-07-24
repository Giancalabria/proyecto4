import styles from './historyProduct.module.scss'
import PropTypes from 'prop-types'
import coin from '../../../assets/icons/coin.svg'
export const HistoryProduct = ({ url, category, name, price, dateRedeem }) => {
	const date = dateRedeem.substr(0, 10)
	return (
		<div className={styles.history}>
			<img className={styles.photo} src={url} alt='producto' />
			<div className={styles.description}>
				<h4 className={styles.category}>{category}</h4>
				<h4 className={styles.name}>{name}</h4>
				<h4 className={styles.price}>
					Price:
					{price}
					<img src={coin} className={styles.coin} />
				</h4>
				<div className={styles.dateContainer}>
					<h4 className={styles.date}>Redeem date:</h4>
					<h4>{date}</h4>
				</div>
			</div>
		</div>
	)
}

HistoryProduct.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	category: PropTypes.string,
	index: PropTypes.number,
	price: PropTypes.number,
	id: PropTypes.string,
	dateRedeem: PropTypes.any,
}
