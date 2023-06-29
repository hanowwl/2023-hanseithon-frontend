import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "src/apis";
import { APIResponse } from "src/apis/core/types";
import { LoginParameters, LoginResponse } from "src/apis/services/auth";

export const useLoginMutation = () =>
  useMutation<APIResponse<LoginResponse>, AxiosError<APIResponse<void>>, LoginParameters>({
    mutationFn: (parameters) => api.auth.login(parameters),
  });
