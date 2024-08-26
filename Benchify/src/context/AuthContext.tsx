import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

const TokenContext = createContext<string | null>(null);

interface TokenProviderProps {
  children: ReactNode;
}

export const TokenProvider = ({ children }: TokenProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    window.location.hash = '';
    let _token = window.localStorage.getItem('token');

    if (!_token && hash) {
      _token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem('token', _token);
    }

    if (!_token) {
      navigate('/login');
    }
    setToken(_token);

    if (_token) {
      const removeToken = setTimeout(() => {
        window.localStorage.removeItem('token');
        setToken(null);
        navigate('/login');
      }, 720000);

      return () => clearTimeout(removeToken);
    }
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      const _token = window.localStorage.getItem('token');
      if (!_token) {
        navigate('/login');
      } else {
        setToken(_token);
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => window.removeEventListener('storage', handleStorage);
  }, [navigate]);

  return (
    <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
  );
};

export const useToken = (): string | undefined => {
  const token = useContext(TokenContext);
  if (token === null) {
    console.log('token is null');
  }
  return token;
};

// const [track, setTrack] = useState<any>(null);
// useEffect(() => {
//   if (token) {
//     const trackEndPoint = 'https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl';
//     _getTrack(token, trackEndPoint)
//       .then((data) => {
//         setTrack(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching track:', error);
//       });
//   }
// }, [token]);
