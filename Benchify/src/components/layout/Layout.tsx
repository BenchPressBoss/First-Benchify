import { ReactNode } from 'react';

import styles from './Layout.module.scss';
import { Header } from './header/Header';
import { NowPlaying } from './now-playing/NowPlaying';
import { Sidebar } from './sidebar/Sidebar';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainBlock}>
        <Header />
        <div className={styles.content}>
          {children}
          <NowPlaying />
        </div>
      </div>
    </div>
  );
};
