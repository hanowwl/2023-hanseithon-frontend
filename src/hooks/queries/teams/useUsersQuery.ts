import { useQuery } from "@tanstack/react-query";

import { AllUserResponse, api } from "src/apis";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";

export const useUsersQuery = (options?: UseQueryCustomOptions<AllUserResponse>[]) => {
  return useQuery({
    queryKey: keys.teams.teams(""),
    queryFn: () => api.auth.getUsers().then((res) => res.result),
    ...options,
  });
};
