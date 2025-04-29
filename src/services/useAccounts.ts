// hooks/useAccounts.ts
import { Account } from "@/interface/account.interface";
import { useQuery, QueryFunction } from "@tanstack/react-query";
import axios from "axios";



const fetchAccounts: QueryFunction<Account[]> = async () => {
  const response = await axios.get<Account[]>(
    `https://6810b5e927f2fdac24127ce7.mockapi.io/accounts`
  );
  return response.data;
};


export const useAccounts = () => {
  return useQuery<Account[]>({
    queryKey: ["accounts"],
    queryFn: fetchAccounts,
  });
};
