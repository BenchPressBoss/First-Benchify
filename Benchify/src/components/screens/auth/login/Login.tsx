import { NavLinks } from '@components/ui/navlinks/NavLinks';

import { loginEndpoint } from '../../../../services/spotify';

export const Login = () => {
  return (
    <form>
      <label>
        <NavLinks to={loginEndpoint}>Login</NavLinks>
      </label>
    </form>
  );
};
