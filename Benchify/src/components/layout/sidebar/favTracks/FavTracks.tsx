import { AllItemBtn } from '@components/ui/allItemsBtn/AllItemsBtn';
import { SongButton } from '@components/ui/song-button/SongButton';

import { useFavTracks } from '@hooks/useFavTracks';

import styles from './FavTracks.module.scss';

export const FavTracks = () => {
  const endPoint = 'https://api.spotify.com/v1/me/tracks';

  const { favTracks } = useFavTracks(endPoint);

  const getTrackName = (name) => {
    if (name.length > 14) {
      return (
        <div className={styles.scrollContainer}>
          <div className={styles.scrollText}>{name}</div>
        </div>
      );
    }
    return name;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <AllItemBtn to="/likedtracks" className={styles.likedTracksBtn}>
          Liked tracks
        </AllItemBtn>
      </div>

      {favTracks.slice(0, 5).map((track) => (
        <SongButton
          key={track.id}
          src={track.album.images[2]?.url}
          songName={getTrackName(track.name)}
          description={track.type}
          className={styles.button}
        />
      ))}
    </div>
  );
};
