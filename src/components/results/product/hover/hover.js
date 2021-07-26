import styles from './hover.module.scss'
import PropTypes from 'prop-types'
import { Button } from '../../../button/button'
import { useContext, useEffect, useState } from 'react'
import { redeemProduct } from '../../../../services/redeem'
import { Context } from '../../../../context/context'
export const Hover = ({ price, coin, id }) => {
	const { setRedeemedProduct, setShowRedeemMessage, setIsError, user } =
		useContext(Context)
	const [redeemId, setRedeemId] = useState('')

	useEffect(() => {
		if (redeemId === id && user.points >= price) {
			redeemProduct(redeemId, setIsError)
				.then(() => setRedeemedProduct(false))
				.then(() => setRedeemId(0))
				.then(() => setShowRedeemMessage(true))
		} else if (redeemId === id && user.points < price) {
			setIsError(true)
			setShowRedeemMessage(true)
			setRedeemedProduct(false)
		}
	}, [redeemId])

	return (
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
					onClick={() => {
						setRedeemId(id)
						user.points < price ? setIsError(true) : setIsError(false)
						setRedeemedProduct(true)
					}}
				/>
			</div>
		</div>
	)
}

Hover.propTypes = {
	coin: PropTypes.string,
	price: PropTypes.number,
	id: PropTypes.string,
}
