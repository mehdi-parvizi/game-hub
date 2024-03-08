import { useQuery, useQueryClient } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: queryClient.getQueryData(["genres"]),
  });
};
export default useGenres;
