import styles from './hover.module.scss'
import PropTypes from 'prop-types'
import { Button } from '../../../button/button'
import { useContext, useEffect, useState } from 'react'
import { redeemProduct } from '../../../../services/redeem'
import { Context } from '../../../../context/context'
export const Hover = ({ price, coin, id }) => {
	const { setRedeemedProduct } = useContext(Context)
	const [redeemId, setRedeemId] = useState('')

	useEffect(() => {
		if (redeemId === id) {
			redeemProduct(redeemId)
				.then(() => setRedeemedProduct(false))
				.then(() => setRedeemId(0))
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
					onClick={() => setRedeemId(id) + setRedeemedProduct(true)}
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
