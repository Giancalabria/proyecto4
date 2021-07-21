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

	const mappedProducts = products.map((object, index) => (
		<Product
			key={index}
			url={object.img.hdUrl}
			name={object.name}
			category={object.category}
			id={index}
		/>
	))

	return <section className={styles.results}>{mappedProducts}</section>
}
