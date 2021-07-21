import styles from './main2.module.scss'
import { Page } from '../../components/page/page'
import { Button } from '../../components/button/button'
import background from '../../assets/png/header-x2.png'
import { Results } from '../../components/results/results'
import { useContext } from 'react'
import { Context } from '../../context/context'
import { Link } from 'react-router-dom'
export const Main2 = () => {
	const { products, setCurrentPage } = useContext(Context)

	return (
		<Page id='main2' className={styles.main} background={background}>
			<div className={styles.container}>
				<div className={styles.info}>
					<p className={styles.amountProducts}>
						{products.length} of {products.length} products
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
					<Link to='/'>
						<Button
							variant='terciary'
							content='<'
							onClick={() => setCurrentPage(0)}
						/>
					</Link>
				</div>
			</div>
			<Results />
		</Page>
	)
}
