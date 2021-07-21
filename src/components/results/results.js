import { useContext, useEffect } from 'react'
import { Context } from '../../context/context'
import { Product } from './product/product'
import { getProducts } from '../../services/products'
import styles from './results.module.scss'
export const Results = () => {
	const { products, setProducts } = useContext(Context)
	useEffect(() => {
		getProducts().then((products) => setProducts(products))
	}, [])
	return (
		<section className={styles.results}>
			{products.map((object) => (
				<Product
					key={object._id}
					url={object.img.hdUrl}
					name={object.name}
					category={object.category}
				/>
			))}
		</section>
	)
}
