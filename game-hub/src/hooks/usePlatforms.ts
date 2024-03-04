import { useQuery, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const clientQuery = useQueryClient();
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: clientQuery.getQueryData(["platforms"]),
  });
};

export default usePlatforms;
