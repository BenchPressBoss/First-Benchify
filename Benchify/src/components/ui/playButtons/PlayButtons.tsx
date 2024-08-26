import cn from 'clsx';

import styles from './PlayButtons.module.scss';

interface PlayButtonProps {
  src?: string;
  songName?: string;
  creator?: string;
  className?: string;
}

export const PlayButtons = ({
  src,
  songName,
  creator,
  className,
}: PlayButtonProps) => {
  return (
    <button className={cn(styles.playButton, className)}>
      <img src={src} alt="" className={styles.img} />
      <div className={styles.info}>
        <p>{songName}</p>
        <p>{creator.map((artist) => artist.name).join(', ')}</p>
      </div>
    </button>
  );
};
