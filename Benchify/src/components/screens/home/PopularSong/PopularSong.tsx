import { AllItemBtn } from '@components/ui/allItemsBtn/AllItemsBtn';
import { PlayButtons } from '@components/ui/playButtons/PlayButtons';

import { usePopularTracks } from '@hooks/usePopularTracks';

import styles from './PopularSong.module.scss';

export const PopularSong = () => {
  const { popularTracks } = usePopularTracks();

  console.log(popularTracks);

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h4> Trending songs</h4>
        <AllItemBtn
          children="see all"
          to="/alltracks"
          className={styles.allTrackBtn}
        />
      </div>
      <div className={styles.tracks}>
        {popularTracks.slice(0, 4).map((track) => (
          <PlayButtons
            key={track.id}
            src={track.album.images[0].url}
            songName={
              track.name.length >= 15
                ? track.name.slice(0, 15)
                : 'название короткое'
            }
            creator={track.artists}
            className={styles.trackButton}
          />
        ))}
      </div>
    </div>
  );
};
