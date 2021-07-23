import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/context'
import { Product } from './product/product'
import { getProducts } from '../../services/products'
import styles from './results.module.scss'

export const Results = () => {
	const { products, setProducts, currentFilter, setCurrentFilter } =
		useContext(Context)

	const [mappedProducts, setMappedProducts] = useState()
	useEffect(() => {
		getProducts()
			.then((products) => setProducts(products))
			.then(setCurrentFilter(3))
	}, [])

	useEffect(() => {
		const mapProducts = () => {
			return products.map((object, index) => (
				<Product
					key={index}
					url={object.img.hdUrl}
					name={object.name}
					category={object.category}
					index={index}
					price={object.cost}
					id={object._id}
				/>
			))
		}
		setMappedProducts(mapProducts)
	}, [currentFilter, products])

	return <section className={styles.results}>{mappedProducts}</section>
}
