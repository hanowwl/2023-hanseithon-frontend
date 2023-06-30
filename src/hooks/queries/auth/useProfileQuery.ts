import { useQuery } from "@tanstack/react-query";

import { GetProfileResponse, api } from "src/apis";
import { APIResponse } from "src/apis/core/types";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";

export const useProfileQuery = (
  options: UseQueryCustomOptions<APIResponse<GetProfileResponse>>
) => {
  return useQuery({
    queryKey: keys.auth.profile,
    queryFn: () => api.auth.getProfile(),
    ...options,
  });
};
