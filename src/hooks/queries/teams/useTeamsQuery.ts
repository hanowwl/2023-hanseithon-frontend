import { useQuery } from "@tanstack/react-query";

import { GetTeamResponse, api } from "src/apis";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";

export const useTeamsQuery = (options?: UseQueryCustomOptions<GetTeamResponse>[]) => {
  return useQuery({
    queryKey: keys.teams.teams("/all/members"),
    queryFn: () => api.auth.getTeams().then((res) => res.result),
    ...options,
  });
};
