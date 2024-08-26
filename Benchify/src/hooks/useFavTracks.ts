import { useToken } from '@context/AuthContext';
import { useQuery } from '@tanstack/react-query';

import { _getTrack } from '../services/spotify';

const fetchFavTracks = async (token, endPoint) => {
  const data = await _getTrack(token, endPoint);
  return data.items.map((item) => item.track);
};

export const useFavTracks = (endPoint) => {
  const token = useToken();
  const {
    data: favTracks = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['favTracks', token],
    queryFn: () => fetchFavTracks(token, endPoint),
    enabled: !!token,
    initialData: () => {
      const storedTracks = localStorage.getItem('favTracks');
      return storedTracks ? JSON.parse(storedTracks) : [];
    },
    onSuccess: (data) => {
      localStorage.setItem('favTracks', JSON.stringify(data));
      console.log(data);
    },
  });

  return { favTracks, isLoading, error };
};
