import cn from 'clsx'

import styles from './MusicButton.module.scss'

interface ButtonProps {
	title: string
	description: string
	img?: string
	type: 'small' | 'middle' | 'big'
	className?: string
}

function MusicButton({
	title,
	description,
	img,
	type,
	className
}: ButtonProps) {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.smallButton]: type === 'small',
				[styles.bigButton]: type === 'big'
			})}
		>
			<img src={img} alt='' />
			<div className={styles.info}>
				<p>{title}</p>
				<p className={styles.description}>{description}</p>
			</div>
		</button>
	)
}

export default MusicButton
