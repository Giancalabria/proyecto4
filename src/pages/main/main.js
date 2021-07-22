import styles from './main.module.scss'
import { Page } from '../../components/page/page'
import { Button } from '../../components/button/button'
import background from '../../assets/png/header-x1.png'
import background2 from '../../assets/png/header-x2.png'
import { Results } from '../../components/results/results'
import { useContext } from 'react'
import { Context } from '../../context/context'

export const Main = () => {
	const {
		products,
		setCurrentPage,
		currentPage,
		setCurrentFilter,
		setProducts,
		currentFilter,
	} = useContext(Context)

	const getNumberOfProducts = () => {
		if (products.length < 16) {
			return products.length
		} else if (products.length > 16) {
			return 16
		}
	}

	const sortProductsBy = (array, sort, desc) => {
		if (desc === true) {
			let newProducts = array.sort(function (a, b) {
				if (a[sort] < b[sort]) {
					return -1
				} else if (a[sort] > b[sort]) {
					return 1
				} else {
					return 0
				}
			})
			setProducts(newProducts)
		} else if (desc === false) {
			let newProducts = array.sort(function (a, b) {
				if (a[sort] > b[sort]) {
					return -1
				} else if (a[sort] < b[sort]) {
					return 1
				} else {
					return 0
				}
			})
			setProducts(newProducts)
		}
	}

	return (
		<Page
			id='main'
			className={styles.main}
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
						variant='secondary'
						className={`${styles.button} ${
							currentFilter === 0 ? styles.active : styles.inactive
						}`}
						onClick={() =>
							sortProductsBy(products, 'name', true) + setCurrentFilter(0)
						}
					/>
					<Button
						content='Lowest price'
						variant='secondary'
						className={`${styles.button} ${
							currentFilter === 1 ? styles.active : styles.inactive
						}`}
						onClick={() =>
							sortProductsBy(products, 'cost', true) + setCurrentFilter(1)
						}
					/>
					<Button
						content='Highest price'
						variant='secondary'
						className={`${styles.button} ${
							currentFilter === 2 ? styles.active : styles.inactive
						}`}
						onClick={() =>
							sortProductsBy(products, 'cost', false) + setCurrentFilter(2)
						}
					/>
				</div>
				<div className={styles.arrows}>
					{products.length > 16 ? (
						<Button
							variant='terciary'
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
	)
}
