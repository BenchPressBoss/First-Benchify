import cn from 'clsx'
import { ChangeEvent, forwardRef } from 'react'
import styles from './Input.module.scss'

interface InputProps {
	type: 'text' | 'password' | 'email'
	id: string
	name: string
	placeholder: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	className?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type, id, name, placeholder, onChange, className }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				className={cn(styles.input, className)}
				onChange={onChange}
			/>
		)
	}
)
