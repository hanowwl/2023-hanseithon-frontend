import { useQuery } from "@tanstack/react-query";

import { TeamMember, api } from "src/apis";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";

export const useAllTeamMembersQuery = (options?: UseQueryCustomOptions<TeamMember[]>) => {
  return useQuery({
    queryKey: keys.teams.allMembers,
    queryFn: () => api.teams.getAllTeamMembers().then((res) => res.result),
    ...options,
  });
};
