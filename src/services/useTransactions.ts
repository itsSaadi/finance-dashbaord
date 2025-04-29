// hooks/useTransactions.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



export interface Transaction {
    id: string;
    accountid: string;
    date: string;
    description: string;
    amount: number;
  }



const fetchTransactions = async (accountId: string): Promise<Transaction[]> => {
  const response = await axios.get<Transaction[]>(
    `https://6810b5e927f2fdac24127ce7.mockapi.io/transactions?accountid=${accountId}`
  );
  return response.data;
};

export const useTransactions = (accountId: string) => {
  return useQuery<Transaction[]>({
    queryKey: ['transactions', accountId],
    queryFn: () => fetchTransactions(accountId),
    enabled: !!accountId, // ensures it doesn't fetch until accountId is available
  });
};
