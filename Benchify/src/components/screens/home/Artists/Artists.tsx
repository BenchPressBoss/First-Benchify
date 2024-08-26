import { AllItemBtn } from '@components/ui/allItemsBtn/AllItemsBtn';

import { useArtists } from '@hooks/useArtists';

import styles from './Artists.module.scss';

export const Artists = () => {
  const { artists } = useArtists();
  return (
    <div>
      <div className={styles.artists}>
        <h4>Artists</h4>
        <AllItemBtn
          children="see all"
          to="/allArtists"
          className={styles.allTrackBtn}
        />
      </div>
      <div className={styles.artist}>
        {artists.map((artist) => (
          <div className={styles.artistInfo} key={artist.id}>
            <img
              src={artist.images[0].url}
              alt={artist.name}
              className={styles.artistImage}
            />
            <p>{artist.name}</p>
          </div>
        ))}
        {artists.map((artist) => (
          <div className={styles.artistInfo} key={artist.id}>
            <img
              src={artist.images[0].url}
              alt={artist.name}
              className={styles.artistImage}
            />
            <p>{artist.name}</p>
          </div>
        ))}
        {artists.map((artist) => (
          <div className={styles.artistInfo} key={artist.id}>
            <img
              src={artist.images[0].url}
              alt={artist.name}
              className={styles.artistImage}
            />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
