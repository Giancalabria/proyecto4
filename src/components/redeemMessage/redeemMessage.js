import styles from './redeemMessage.module.scss'
import happy from '../../assets/icons/happy.svg'
import sad from '../../assets/icons/sad-face.svg'
import { Button } from '../button/button'
import { useContext } from 'react'
import { Context } from '../../context/context'
export const RedeemMessage = () => {
	const { setShowRedeemMessage, isError, setIsError } = useContext(Context)

	console.log(isError)
	return (
		<div
			className={`${styles.redeemMessage} `}
			style={{ height: window.innerHeight, width: window.innerWidth }}
		>
			<div
				className={styles.redeemFlex}
				style={{ height: window.innerHeight, width: window.innerWidth }}
			>
				<div
					className={`${styles.container} ${
						!isError ? styles.succesfully : styles.error
					}`}
				>
					<img src={!isError ? happy : sad} className={styles.happy} />
					<h1 className={styles.success}>{!isError ? 'SUCCESS!' : 'ERROR!'}</h1>
					<p className={styles.text}>
						{!isError
							? 'Congratulations, you have redeemed your item succesfully!'
							: 'Something went wrong, please try again'}
					</p>
					<Button
						content={!isError ? 'Accept' : 'Try again'}
						variant='terciary'
						className={`${
							!isError ? styles.successButton : styles.errorButton
						}`}
						onClick={() => {
							setShowRedeemMessage(false)
							isError ? setIsError(false) : null
						}}
					/>
				</div>
			</div>
		</div>
	)
}
