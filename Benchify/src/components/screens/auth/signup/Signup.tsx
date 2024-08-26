import { Button } from '@components/ui/button/Button';
import { Input } from '@components/ui/input/Input';
import { NavLinks } from '@components/ui/navlinks/NavLinks';

import styles from './Signup.module.scss';

export const Signup = () => {
  return (
    <form>
      <label>
        <h2>Sing up</h2>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Your email..."
          className={styles.input}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Create password..."
          className={styles.input}
        />
        <Button type="submit">Sing up</Button>
        <NavLinks
          className={styles.singUpLink}
          to="/login"
          children="Do you have an account?"
        />
      </label>
    </form>
  );
};
