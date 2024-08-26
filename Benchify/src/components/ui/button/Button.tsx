import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Button = ({ children, type }: ButtonProps) => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
};
