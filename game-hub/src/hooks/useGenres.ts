import { useQuery, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: queryClient.getQueryData(["genres"]),
  });
};
export default useGenres;
