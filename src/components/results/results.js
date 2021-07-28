import { useContext, useEffect } from 'react'
import { Context } from '../../context/context'
import { Product } from './product/product'
import { getProducts } from '../../services/products'
import styles from './results.module.scss'
export const Results = () => {
	const { products, setProducts, setCurrentFilter } = useContext(Context)

	useEffect(() => {
		getProducts()
			.then((products) => setProducts(products))
			.then(setCurrentFilter(3))
	}, [])

	return (
		<section className={styles.results}>
			{products.map((object, index) => (
				<Product
					key={index}
					url={object.img.hdUrl}
					name={object.name}
					category={object.category}
					index={index}
					price={object.cost}
					id={object._id}
				/>
			))}
		</section>
	)
}
