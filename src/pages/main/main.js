import styles from './main.module.scss'
import { Page } from '../../components/page/page'
import { Button } from '../../components/button/button'
import background from '../../assets/png/header-x1.png'
import { Results } from '../../components/results/results'
import { useContext } from 'react'
import { Context } from '../../context/context'
import { Link } from 'react-router-dom'
export const Main = () => {
	const { products, setCurrentPage } = useContext(Context)

	const getNumberOfProducts = () => {
		if (products.length < 16) {
			return products.length
		} else if (products.length > 16) {
			return 16
		}
	}
	return (
		<Page id='main' className={styles.main} background={background}>
			<div className={styles.container}>
				<div className={styles.info}>
					<p className={styles.amountProducts}>
						{getNumberOfProducts()} of {products.length} products
					</p>
					<p className={styles.text}>Sort by:</p>
					<Button
						content='Most recent'
						variant='secondary'
						className={styles.button}
					/>
					<Button
						content='Lowest price'
						variant='secondary'
						className={styles.button}
					/>
					<Button
						content='Highest price'
						variant='secondary'
						className={styles.button}
					/>
				</div>
				<div className={styles.arrows}>
					{products.length > 16 ? (
						<Link to='/2'>
							<Button
								variant='terciary'
								content='>'
								onClick={() => setCurrentPage(1)}
							/>
						</Link>
					) : null}
				</div>
			</div>
			<Results />
		</Page>
	)
}
