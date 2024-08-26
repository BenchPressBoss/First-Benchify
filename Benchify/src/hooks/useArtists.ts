import { useToken } from '@context/AuthContext';
import { useQuery } from '@tanstack/react-query';

import { _getTrack } from '../services/spotify';

const endPoint =
  'https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6';

const fetchArtists = async (token, endPoint) => {
  const data = await _getTrack(token, endPoint);
  return data.artists;
};

export const useArtists = () => {
  const token = useToken();
  const {
    data: artists = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['artists', token],
    queryFn: () => fetchArtists(token, endPoint),
    enabled: !!token,
    initialData: () => {
      const storedTracks = localStorage.getItem('artists');
      return storedTracks ? JSON.parse(storedTracks) : [];
    },
    onSuccess: (data) => {
      localStorage.setItem('artists', JSON.stringify(data));
      console.log(data);
    },
  });

  return { artists, isLoading };
};
