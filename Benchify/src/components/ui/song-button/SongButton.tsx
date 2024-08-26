import cn from 'clsx';

import styles from './SongButton.module.scss';

interface LayoutProps {
  src: string;
  songName: string;
  description: string;
  className?: string;
}

export const SongButton = ({
  src,
  songName,
  description,
  className,
}: LayoutProps) => {
  return (
    <button className={cn(styles.songButton, className)}>
      <img src={src} alt="" className={styles.img} />
      <div className={styles.info}>
        <h3>{songName}</h3>
        <p>{description}</p>
      </div>
    </button>
  );
};
