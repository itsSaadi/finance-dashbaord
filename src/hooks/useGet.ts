// hooks/useGet.ts
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';

export function useGet<T>(
  queryKey: string | unknown[],
  url: string,
  options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
) {
  return useQuery<T>({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: async () => {
      const response = await axios.get<T>(url);
      return response.data;
    },
    ...options,
  });
}
