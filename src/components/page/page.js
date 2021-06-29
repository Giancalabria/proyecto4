import { Fragment } from 'react'
import { Header } from '../header/header'
import PropTypes from 'prop-types'
import styles from './page.module.scss'

export const Page = ({ children, className, id, background }) => {
	return (
		<Fragment>
			<Header background={background} />
			<main id={id} className={`${className} ${styles.body}`}>
				{children}
			</main>
		</Fragment>
	)
}

Page.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	background: PropTypes.string,
}
