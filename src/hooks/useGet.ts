import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGet<T>(queryKey: string | unknown[], url: string) {
  return useQuery<T>({
    queryKey: queryKey as any,
    queryFn: async () => {
      const response = await axios.get<T>(url);
      return response.data;
    },
  });
}
