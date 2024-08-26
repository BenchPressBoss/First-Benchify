import { Layout } from '@components/layout/Layout';

// Предполагаем, что это путь к вашей функции _getTrack
import { Artists } from './Artists/Artists';
import styles from './Home.module.scss';
import { PopularSong } from './PopularSong/PopularSong';
import { Playlist } from './playlists/Playlists';

const Home = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.popularTracks}>
          <PopularSong></PopularSong>
        </div>
        <div className={styles.playlists}>
          <Playlist></Playlist>
        </div>
        <div className={styles.artists}>
          <Artists></Artists>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
