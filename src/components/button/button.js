import PropTypes from 'prop-types'
import styles from './button.module.scss'

export const Button = ({
	className,
	onClick,
	content,
	variant = 'primary',
}) => {
	return (
		<button
			className={`${className} ${styles[variant]} ${styles.button}`}
			onClick={onClick}
		>
			{content}
		</button>
	)
}

Button.propTypes = {
	className: PropTypes.string,
	content: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	variant: PropTypes.oneOf(['primary', 'secondary', 'terciary']),
}
