import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/context'
import { getHistory } from '../../services/history'
import { HistoryProduct } from './historyProduct/historyProduct'
import styles from './history.module.scss'
import { Button } from '../button/button'
export const History = () => {
	const { user, setShowHistory } = useContext(Context)
	const [historyData, setHistoryData] = useState()
	const [mappedHistoryProducts, setMappedHistoryProducts] = useState()

	useEffect(() => {
		getHistory().then((data) => setHistoryData(data))
	}, [user])

	useEffect(() => {
		const mapHistoryProducts = () => {
			return historyData !== undefined ? (
				historyData.map((object, index) => (
					<HistoryProduct
						key={index}
						url={object.img.hdUrl}
						name={object.name}
						category={object.category}
						price={object.cost}
						dateRedeem={object.createDate}
					/>
				))
			) : (
				<div></div>
			)
		}
		setMappedHistoryProducts(mapHistoryProducts)
	}, [historyData])
	return (
		<div
			className={`${styles.container} `}
			style={{ height: window.innerHeight, width: window.innerWidth }}
		>
			<aside className={styles.aside}>
				<Button
					content='X'
					variant='close'
					className={styles.close}
					onClick={() => setShowHistory(false)}
				/>
				<div className={styles.products}>{mappedHistoryProducts}</div>
			</aside>
		</div>
	)
}
