import { useToken } from '@context/AuthContext';
import { useQuery } from '@tanstack/react-query';

import { _getTrack } from '../services/spotify';

const endPoint =
  'https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA';

const fetchPopularTracks = async (token, endPoint) => {
  const data = await _getTrack(token, endPoint);
  return data.tracks;
};

export const usePopularTracks = () => {
  const token = useToken();
  const {
    data: popularTracks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['popularTracks', token],
    queryFn: () => fetchPopularTracks(token, endPoint),
    enabled: !!token,
    initialData: () => {
      const storedTracks = localStorage.getItem('popularTracks');
      return storedTracks ? JSON.parse(storedTracks) : [];
    },
    onSuccess: (data) => {
      localStorage.setItem('popularTracks', JSON.stringify(data));
      console.log(data);
    },
  });

  return { popularTracks, isLoading, refetch };
};
