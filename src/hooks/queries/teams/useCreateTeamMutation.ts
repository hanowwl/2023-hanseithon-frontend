import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { CreateTeamParameters, api } from "src/apis";
import { APIResponse } from "src/apis/core/types";

export const useCreateTeamMutation = () => {
  return useMutation<APIResponse<void>, AxiosError<APIResponse<void>>, CreateTeamParameters>({
    mutationFn: (parameters) => api.teams.createTeam(parameters),
  });
};
