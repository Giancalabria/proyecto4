import styles from './main.module.scss'
import { Page } from '../../components/page/page'
import { Button } from '../../components/button/button'
import background from '../../assets/png/header-x1.png'
import { Results } from '../../components/results/results'
export const Main = () => {
	return (
		<Page id='main' className={styles.main} background={background}>
			<div className={styles.info}>
				<p className={styles.amountProducts}>16 of 32 products</p>
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
			<Results />
		</Page>
	)
}
