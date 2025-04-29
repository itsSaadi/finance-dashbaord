// hooks/useTransactions.ts
import { Transaction } from "@/interface/transactions.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTransactions = async (accountId: string): Promise<Transaction[]> => {
  const response = await axios.get<Transaction[]>(
    `${process.env.BASE_API_URL}transactions?accountid=${accountId}`
  );
  return response.data;
};

export const useTransactions = (accountId: string) => {
  return useQuery<Transaction[]>({
    queryKey: ["transactions", accountId],
    queryFn: () => fetchTransactions(accountId),
    enabled: !!accountId, // ensures it doesn't fetch until accountId is available
  });
};
