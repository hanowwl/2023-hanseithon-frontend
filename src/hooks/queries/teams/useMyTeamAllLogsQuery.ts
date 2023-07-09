import { useQuery } from "@tanstack/react-query";

import { TeamLog, api } from "src/apis";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";

export const useMyTeamAllLogsQuery = (options?: UseQueryCustomOptions<TeamLog[]>) => {
  return useQuery({
    queryKey: keys.teams.teamLogs("@me"),
    queryFn: () => api.teams.getMyTeamAllLogs().then((res) => res.result),
    ...options,
  });
};
