import { useQuery } from "@tanstack/react-query";

import { GetFiles, api } from "src/apis";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";

export const useGetFiles = (options?: UseQueryCustomOptions<GetFiles[]>) => {
  return useQuery({
    queryKey: keys.teams.teams("@me/upload"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    queryFn: () => api.teams.getFiles().then((res) => res.result),
    ...options,
  });
};
