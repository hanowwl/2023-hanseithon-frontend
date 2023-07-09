import { useQuery } from "@tanstack/react-query";

import { Team, api } from "src/apis";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";

export const useMyTeamQuery = (options?: UseQueryCustomOptions<Team>) => {
  return useQuery({
    queryKey: ["teams", "@me"],
    queryFn: () => api.teams.getMyTeam().then((res) => res.result),
    ...options,
  });
};
