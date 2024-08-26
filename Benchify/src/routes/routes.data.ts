import { Albums } from '../components/screens/albums/Albums';
import { Artists } from '../components/screens/artists/Artists';
import { Login } from '../components/screens/auth/login/Login';
import { Signup } from '../components/screens/auth/signup/Signup';
import Home from '../components/screens/home/Home';
import { Songs } from '../components/screens/songs/Songs';

export const ROUTES = [
  {
    path: '/',
    component: Home,
    auth: false,
  },
  {
    path: '/songs',
    component: Songs,
    auth: false,
  },
  {
    path: '/artists',
    component: Artists,
    auth: false,
  },
  {
    path: '/albums',
    component: Albums,
    auth: false,
  },
  {
    path: '/signup',
    component: Signup,
    auth: false,
  },
  {
    path: '/login',
    component: Login,
    auth: false,
  },
];
