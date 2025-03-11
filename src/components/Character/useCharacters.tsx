import { getAllCharacters } from './api';
import { store } from './charactersStore';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const CACHE_KEY = 'Characters';

export function useFetchCharacters() {
  const queryClient = useQueryClient();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [CACHE_KEY],
    queryFn: getAllCharacters,
    initialData: [],
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: [CACHE_KEY],
      queryFn: getAllCharacters,
    });
  }, [queryClient]);

  useEffect(() => {
    if (data?.length) {
      store.setState(() => data);
    }
  }, [data]);

  return { data, error, isLoading, refetch };
}
