import { useEffect, useRef, useState } from 'react'

import MusicButton from '../buttons/musicButton/MusicButton'
import PlayerButton from '../buttons/playerButton/PlayerButton'
import styles from './Player.module.scss'

const Player = () => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [volume, setVolume] = useState<number>(50)
	const [isMuted, setIsMuted] = useState<boolean>(false)
	const [duration, setDuration] = useState<string>('-:--')
	const [currentTime, setCurrentTime] = useState<string | boolean>('-:--')
	const [progress, setProgress] = useState<number>()
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const progressRef = useRef<HTMLInputElement | null>(null)

	const togglePause = () => {
		setIsPlaying(isPlaying => {
			if (audioRef.current) {
				if (isPlaying) audioRef.current.pause()
				else audioRef.current.play()
			}
			return !isPlaying
		})
	}

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = Number(e.target.value)
		setVolume(newVolume)
		if (audioRef.current) audioRef.current.volume = newVolume / 100
	}

	const muteFn = () => {
		setIsMuted(isMuted => {
			if (audioRef.current) audioRef.current.volume = isMuted ? volume / 100 : 0

			return !isMuted
		})
	}

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60)
		const sec = Math.floor(seconds % 60)

		const sectStr = sec < 10 ? `0${sec}` : sec
		return `${minutes}:${sectStr}`
	}

	//change time by user
	const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newTime = Number(e.target.value)

		if (audioRef.current) {
			audioRef.current.currentTime = newTime
			setProgress(newTime)
		}
	}

	useEffect(() => {
		const audioElement = audioRef.current

		const handleDuration = () => {
			if (audioElement) {
				setDuration(formatTime(audioElement.duration))
			}
		}

		const handleTimeUpdate = () => {
			if (audioRef.current) {
				setCurrentTime(formatTime(audioRef.current.currentTime))
				setProgress(audioRef.current.currentTime)
				if (progressRef.current) {
					progressRef.current.value = String(audioRef.current.currentTime)
				}
			}
		}

		if (audioElement) {
			audioElement.addEventListener('ended', () => setIsPlaying(false))
			audioElement.addEventListener('timeupdate', handleTimeUpdate)
			audioElement.addEventListener('loadedmetadata', handleDuration)

			return () => {
				audioElement.removeEventListener('ended', () => setIsPlaying(false))
				audioElement.removeEventListener('timeupdate', () =>
					setCurrentTime(false)
				)
				audioElement.removeEventListener('loadedmetadata', handleDuration)
			}
		}
	}, [])

	return (
		<div className={styles.wrapper}>
			<audio ref={audioRef} src='./music.mp3' />

			<MusicButton
				description='maxim brian'
				title='Sanct 52'
				type='small'
				img='/img.png'
				className={styles.musicButton}
			/>
			<div className={styles.controlPanel}>
				<div className={styles.buttons}>
					<PlayerButton alt='mixed' src='./icons/mixed.svg' size='small' />
					<PlayerButton
						alt='prevTrack'
						src='./icons/previous.svg'
						size='small'
					/>
					{isPlaying ? (
						<PlayerButton
							src='./icons/pause.svg'
							alt='pause'
							onClick={togglePause}
						/>
					) : (
						<PlayerButton
							src='./icons/play.svg'
							alt='play'
							onClick={togglePause}
						/>
					)}

					<PlayerButton alt='nextTrack' src='./icons/next.svg' size='small' />
					<PlayerButton alt='repeat' src='./icons/repeat.svg' size='small' />
				</div>
				<div className={styles.progress}>
					{currentTime}
					<input
						ref={progressRef}
						type='range'
						min='0'
						max={audioRef.current?.duration || 0}
						value={progress}
						onChange={handleProgressChange}
						className={styles.progressBar}
					/>
					{duration}
				</div>
			</div>
			<div className={styles.volumeControl}>
				<PlayerButton
					alt='idk'
					src='./icons/idk.svg'
					size='small'
					className={styles.idk}
				/>
				{isMuted ? (
					<PlayerButton
						alt='mute'
						src='./icons/mute.svg'
						size='small'
						onClick={muteFn}
					/>
				) : (
					<PlayerButton
						alt='volume'
						src='./icons/volume.svg'
						size='small'
						onClick={muteFn}
					/>
				)}

				<input
					type='range'
					min='0'
					max='100'
					onChange={handleVolumeChange}
					className={styles.volumeSlider}
				/>
			</div>
		</div>
	)
}

export default Player
