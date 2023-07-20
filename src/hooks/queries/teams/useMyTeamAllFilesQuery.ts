import { useQuery } from "@tanstack/react-query";

import { TeamFile, api } from "src/apis";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";

export const useMyTeamAllFilesQuery = (options?: UseQueryCustomOptions<TeamFile[]>) => {
  return useQuery({
    queryKey: keys.teams.teamFiles("@me"),
    queryFn: () => api.teams.getMyTeamAllFiles().then((res) => res.result),
    ...options,
  });
};
