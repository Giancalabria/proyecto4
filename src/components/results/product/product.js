import styles from './product.module.scss'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { Context } from '../../../context/context'
import coin from '../../../assets/icons/coin.svg'
import { Button } from '../../button/button'
import bagBlue from '../../../assets/icons/buy-blue.svg'
import bagWhite from '../../../assets/icons/buy-white.svg'
export const Product = ({ url, name, category, id, price }) => {
	const { currentPage, user } = useContext(Context)
	const [isHover, setIsHover] = useState()
	const checkPage = () => {
		return currentPage === 0 ? id < 16 : id >= 16
	}

	const checkhover = (value) => {
		setIsHover(value)
	}

	const redeemProduct = () => {
		alert('Redeemed succesfully')
	}
	return (
		<div
			className={`${styles.product} ${
				checkPage() ? styles.visible : styles.invisible
			}`}
			onMouseOver={() => checkhover(true)}
			onMouseLeave={() => checkhover(false)}
		>
			<div className={styles.container}>
				{isHover && (
					<div className={styles.hoverProduct}>
						<div className={styles.hoverFlex}>
							<div className={styles.priceContainer}>
								<p className={styles.price}>{price}</p>
								<img src={coin} />
							</div>
							<Button
								content='Redeem now!'
								variant='terciary'
								className={`${styles.button} `}
								onClick={() => redeemProduct()}
							/>
						</div>
					</div>
				)}
				{user.points >= price ? (
					<div>
						<img
							src={bagBlue}
							className={`${styles.bag} ${
								!isHover ? styles.visibleBag : styles.invisibleBag
							}`}
						/>
						<img
							src={bagWhite}
							className={`${styles.bag} ${
								isHover ? styles.visibleBag : styles.invisibleBag
							}`}
						/>
					</div>
				) : (
					<div className={styles.neededPoints}>
						<p className={styles.text}>You need {price - user.points}</p>
						<img src={coin} />
					</div>
				)}
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
	id: PropTypes.number,
	price: PropTypes.number,
}
