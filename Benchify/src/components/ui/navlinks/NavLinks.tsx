import cn from 'clsx';

import { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './NavLinks.module.scss';

interface ButtonProps {
  children: string;
  to: string;
  className?: string;
  icon?: ReactNode;
}
export const NavLinks = ({ children, to, className, icon }: ButtonProps) => {
  const location = useLocation();
  if (to) {
    return (
      <NavLink
        to={to}
        className={cn(styles.button, className, {
          [styles.active]: location.pathname === to,
        })}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </NavLink>
    );
  }
};
