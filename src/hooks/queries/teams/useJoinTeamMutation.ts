import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { JoinTeamParameters, Team, api } from "src/apis";
import { APIResponse } from "src/apis/core/types";

export const useJoinTeamMutation = () => {
  return useMutation<APIResponse<Team>, AxiosError<APIResponse<void>>, JoinTeamParameters>({
    mutationFn: (parameters) => api.teams.joinTeam(parameters),
  });
};
