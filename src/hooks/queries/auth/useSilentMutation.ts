import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { LoginResponse, api } from "src/apis";
import { APIResponse } from "src/apis/core/types";

export const useSilentMutation = () =>
  useMutation<APIResponse<LoginResponse>, AxiosError<APIResponse<void>>>({
    mutationFn: () => api.auth.silent(),
  });
