import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { FileUploadParameters, api } from "src/apis";
import { APIResponse } from "src/apis/core/types";

export const useFileUploadMutation = () =>
  useMutation<APIResponse<void>, AxiosError<APIResponse<void>>, FileUploadParameters>({
    mutationFn: (parameters) => api.teams.fileUpload(parameters),
  });
