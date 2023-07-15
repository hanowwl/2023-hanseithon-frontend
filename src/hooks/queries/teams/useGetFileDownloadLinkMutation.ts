import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "src/apis";
import { APIResponse } from "src/apis/core/types";

export const useGetFileDownloadLinkMutation = () => {
  return useMutation<APIResponse<string>, AxiosError<APIResponse<void>>, { id: string }>({
    mutationFn: ({ id }) => api.teams.getFileDownloadLink(id),
  });
};
