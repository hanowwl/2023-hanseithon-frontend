import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "src/apis";
import { APIResponse } from "src/apis/core/types";

export const useDeleteMyTeamMutation = () => {
  return useMutation<APIResponse<void>, AxiosError<APIResponse<void>>>({
    mutationFn: () => api.teams.deleteTeam(),
  });
};
