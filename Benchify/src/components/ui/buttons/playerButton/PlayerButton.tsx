import cn from 'clsx'
import React from 'react'

import styles from './PlayerButton.module.scss'

interface PlayerButtonProps {
	src: string
	alt: string
	size?: 'small' | 'big'
	className?: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function PlayerButton({
	src,
	alt,
	size,
	className,
	onClick
}: PlayerButtonProps) {
	return (
		<button onClick={onClick}>
			<img
				src={src}
				alt={alt}
				className={cn(styles.img, className, {
					[styles.smallButton]: size === 'small',
					[styles.bigButton]: size === 'big'
				})}
			></img>
		</button>
	)
}

export default PlayerButton
