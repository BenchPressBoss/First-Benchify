import { useToken } from '@context/AuthContext';

import { useEffect, useState } from 'react';

import { AllItemBtn } from '@components/ui/allItemsBtn/AllItemsBtn';

import { _getTrack } from '../../../../services/spotify';
import styles from './Playlists.module.scss';

export const Playlist = () => {
  const [playlists, setPlaylist] = useState(null);
  const token = useToken();

  useEffect(() => {
    if (token) {
      const trackEndPoint = `GET https://api.spotify.com/v1/me/playlists`;

      _getTrack(token, trackEndPoint)
        .then((data) => {
          setPlaylist(data.items);
          console.log(data.items);
        })
        .catch((error) => {
          console.error('Ошибка при получении данных:', error);
        });
    }
  }, [token]);

  if (!playlists) {
    return <div className={styles.loader}></div>;
  }
  return (
    <div>
      <div className={styles.playlistInfo}>
        <h4>Playlists</h4>
        <AllItemBtn
          children="see all"
          to="/allArtists"
          className={styles.allPlaylistsBtn}
        />
      </div>
      <div className={styles.playlists}>
        {playlists &&
          playlists.map((playlist) => (
            <div className={styles.playlistInfo} key={playlist.id}>
              <img src="" alt="" />
              <p>{playlist.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
