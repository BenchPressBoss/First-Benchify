import { useEffect, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

import { Input } from '@components/ui/input/Input';

import { useToken } from '../../../context/AuthContext';
import { apiClient } from '../../../services/spotify';
import styles from './Header.module.scss';

export const Header = () => {
  const [image, setImage] = useState('./bg.jpg');
  const [userName, setUserName] = useState('');
  const token = useToken();

  useEffect(() => {
    if (token) {
      apiClient.get('me').then((response) => {
        console.log(response, 'user');
        const fullName = response.data.display_name;
        const [firstName] = fullName.split(' ');
        console.log(firstName);
        const image = response.data.images[0].url;

        setUserName(firstName);
        setImage(image);
      });
    }
  }, []);
  return (
    <header className={styles.header}>
      <>
        <h3>Welcome back, {userName}!</h3>
        <Input
          type="search"
          id="searchInput"
          name="search"
          placeholder="Search by title, artist, or album..."
        />
        <div className={styles.userButtons}>
          <IoSettingsOutline className={styles.settingsIcon} />
          <img src={image} alt="" className={styles.userImg} />
        </div>
      </>
    </header>
  );
};
