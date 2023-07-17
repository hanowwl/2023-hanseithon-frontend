import { useMutation } from "@tanstack/react-query";

import { api, UploadFileParameters } from "src/apis";
import { APIResponse } from "src/apis/core/types";

export const useFileUploadMutation = () =>
  useMutation<APIResponse<UploadFileParameters>, Error, UploadFileParameters>({
    mutationFn: (parameters) => api.teams.fileUpload(parameters),
  });
