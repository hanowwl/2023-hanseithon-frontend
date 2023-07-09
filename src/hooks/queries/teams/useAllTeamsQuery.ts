import { useQuery } from "@tanstack/react-query";

import { Team, api } from "src/apis";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";

export const useAllTeamsQuery = (options?: UseQueryCustomOptions<Team[]>) => {
  return useQuery({
    queryKey: keys.teams.all,
    queryFn: () => api.teams.getAllTeams().then((res) => res.result),
    ...options,
  });
};
