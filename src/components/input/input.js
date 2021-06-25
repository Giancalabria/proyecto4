import PropTypes from 'prop-types'
import styles from "./input.module.scss"

export const Input = ({
    className,
	icon,
	label,
	name,
	onChange,
	placeholder,
	type = 'text',
	value }) => {
    return 	<div className={`${className} ${styles.input}`}>
{label && (<label className={styles.label} htmlFor={name}>
    {label}
</label>)}

<div className={styles.wrapper}>
			{icon && <img src={icon.src} alt={icon.alt} />}
			<input
				id={name}
				className={styles.value}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				value={value}
			/>
		</div>
        </div>
}


Input.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.shape({
		alt: PropTypes.string.isRequired,
		src: PropTypes.string.isRequired,
	}),
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.oneOf(['text', 'number', 'password']),
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}