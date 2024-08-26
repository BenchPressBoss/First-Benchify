import styles from './TrendingSongButton.module.scss'

interface TrendingSongButtonProps {
	imgUrl: string
}
function TrendingSongButton({ imgUrl: string }: TrendingSongButtonProps) {
	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url(${imgUrl})` }}
		></div>
	)
}

export default TrendingSongButton
