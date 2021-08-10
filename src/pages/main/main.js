import styles from './main.module.scss'
import { Page } from '../../components/page/page'
import { Button } from '../../components/button/button'
import background from '../../assets/png/header-x1.png'
import background2 from '../../assets/png/header-x2.png'
import { Results } from '../../components/results/results'
import { useContext } from 'react'
import { Context } from '../../context/context'
import { RedeemMessage } from '../../components/redeemMessage/redeemMessage'
import { History } from '../../components/history/history'
import sortProductsBy from '../../utils/functions/sortProductsBy'
export const Main = () => {
	const {
		products,
		setCurrentPage,
		currentPage,
		setCurrentFilter,
		setProducts,
		currentFilter,
		showRedeemMessage,
		showHistory,
	} = useContext(Context)

	const getNumberOfProducts = () => {
		if (products.length < 16) {
			return products.length
		} else if (products.length > 16) {
			return 16
		}
	}

	return (
		<section>
			{showRedeemMessage ? <RedeemMessage /> : null}
			{showHistory ? <History /> : null}
			<Page
				id='main'
				className={`${styles.main} ${
					showHistory ? styles.stopScrolling : null
				}`}
				background={currentPage === 0 ? background : background2}
			>
				<div className={styles.container}>
					<div className={styles.info}>
						<p className={styles.amountProducts}>
							{currentPage === 0 ? getNumberOfProducts() : products.length} of{' '}
							{products.length} products
						</p>
						<p className={styles.text}>Sort by:</p>
						<Button
							content='Name'
							variant='primary'
							className={`${styles.button} ${
								currentFilter === 0 ? styles.active : styles.inactive
							}`}
							onClick={() =>
								setProducts(sortProductsBy(products, 'name', true)) +
								setCurrentFilter(0)
							}
						/>
						<Button
							content='Lowest price'
							variant='primary'
							className={`${styles.button} ${
								currentFilter === 1 ? styles.active : styles.inactive
							}`}
							onClick={() =>
								setProducts(sortProductsBy(products, 'cost', true)) +
								setCurrentFilter(1)
							}
						/>
						<Button
							content='Highest price'
							variant='primary'
							className={`${styles.button} ${
								currentFilter === 2 ? styles.active : styles.inactive
							}`}
							onClick={() =>
								setProducts(sortProductsBy(products, 'cost', false)) +
								setCurrentFilter(2)
							}
						/>
					</div>
					<div className={styles.arrows}>
						{products.length > 16 ? (
							<Button
								variant='secondary'
								content={currentPage === 0 ? '>' : '<'}
								onClick={
									currentPage === 0
										? () => setCurrentPage(1)
										: () => setCurrentPage(0)
								}
							/>
						) : null}
					</div>
				</div>
				<Results />
			</Page>
		</section>
	)
}
