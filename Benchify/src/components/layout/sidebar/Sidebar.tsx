import { FaRegCirclePause } from 'react-icons/fa6';
import { GrHomeRounded } from 'react-icons/gr';
import { PiMusicNotes } from 'react-icons/pi';
import { TbMicrophone2 } from 'react-icons/tb';

import { NavLinks } from '@components/ui/navlinks/NavLinks';

import styles from './Sidebar.module.scss';
import { FavTracks } from './favTracks/FavTracks';

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <NavLinks to="/" className={styles.button} icon={<GrHomeRounded />}>
          Home
        </NavLinks>
        <NavLinks to="/songs" className={styles.button} icon={<PiMusicNotes />}>
          Songs
        </NavLinks>
        <NavLinks
          to="/artists"
          className={styles.button}
          icon={<TbMicrophone2 />}
        >
          Artists
        </NavLinks>
        <NavLinks
          to="/albums"
          className={styles.button}
          icon={<FaRegCirclePause />}
        >
          Albums
        </NavLinks>
      </nav>
      <div className={styles.line}></div>
      <FavTracks />
    </div>
  );
};
