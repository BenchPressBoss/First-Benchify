import cn from 'clsx';

import { NavLink, useLocation } from 'react-router-dom';

import styles from './AllItemsBtn.module.scss';

interface AllItemBtnProps {
  children: string;
  to: string;
  className?: string;
}
export const AllItemBtn = ({ children, to, className }: AllItemBtnProps) => {
  const location = useLocation();
  if (to) {
    return (
      <NavLink
        to={to}
        className={cn(styles.button, className, {
          [styles.active]: location.pathname === to,
        })}
      >
        {children}
      </NavLink>
    );
  }
};
