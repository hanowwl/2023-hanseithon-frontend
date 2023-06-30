import { UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { APIResponse } from "src/apis/core/types";

export type UseQueryCustomOptions<TData, TError = AxiosError<APIResponse<void>>> = Omit<
  UseQueryOptions<TData, TError, TData>,
  "initialData"
>;
