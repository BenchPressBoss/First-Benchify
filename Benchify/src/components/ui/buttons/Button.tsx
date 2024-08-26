import cn from 'clsx'
import { NavLink } from 'react-router-dom'

import styles from './Button.module.scss'

interface ButtonProps {
	text: string
	icon?: string
	path: string
	className?: string
}

function Button({ text, icon, path, className }: ButtonProps) {
	return (
		<NavLink to={path} className={cn(styles.button, className)}>
			<img src={icon} alt='navButton' />
			{text}
		</NavLink>
	)
}

export default Button
