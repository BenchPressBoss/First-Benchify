import React from 'react';

import styles from './ReloadButton.module.scss';

interface ReloadButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ReloadButton: React.FC<ReloadButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src="reload.svg" alt="Reload" />
    </button>
  );
};
