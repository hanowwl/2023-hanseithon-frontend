import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "src/apis";
import { APIResponse } from "src/apis/core/types";
import { RegisterParameters } from "src/apis/services/auth";

export const useRegisterMutation = () =>
  useMutation<APIResponse<void>, AxiosError<APIResponse<void>>, RegisterParameters>({
    mutationFn: (parameters) => api.auth.register(parameters),
  });
