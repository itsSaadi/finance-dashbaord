// hooks/useAccounts.ts
import { useQuery, QueryFunction } from '@tanstack/react-query';
import axios from 'axios';



export interface Account {
    id: string;
    name: string;
    balance: number;
    type: string;
  }
  

const fetchAccounts: QueryFunction<Account[]> = async () => {
  const response = await axios.get<Account[]>(
    'https://6810b5e927f2fdac24127ce7.mockapi.io/accounts'
  );
  return response.data;
};

export const useAccounts = () => {
  return useQuery<Account[]>({
    queryKey: ['accounts'],
    queryFn: fetchAccounts,
  });
};
