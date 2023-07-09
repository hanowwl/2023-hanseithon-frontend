import { useQuery } from "@tanstack/react-query";

import { Team, api } from "src/apis";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";

export const useTeamByInviteCodeQuery = (
  { inviteCode }: { inviteCode: string },
  options?: UseQueryCustomOptions<Team>
) => {
  return useQuery({
    queryKey: keys.teams.teamByInviteCode(inviteCode),
    queryFn: () => api.teams.getTeamByInviteCode(inviteCode).then((res) => res.result),
    ...options,
  });
};
