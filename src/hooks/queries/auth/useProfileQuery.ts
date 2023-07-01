import { useQuery } from "@tanstack/react-query";

import { GetProfileResponse, api } from "src/apis";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";

export const useProfileQuery = (options?: UseQueryCustomOptions<GetProfileResponse>) => {
  return useQuery({
    queryKey: keys.auth.profile,
    queryFn: () => api.auth.getProfile().then((res) => res.result),
    staleTime: 1000 * 60 * 10,
    ...options,
  });
};
