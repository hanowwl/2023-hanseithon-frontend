import { useQuery } from "@tanstack/react-query";

import { FileDownloadUrl, api } from "src/apis";

import { keys } from "../keys";
import { UseQueryCustomOptions } from "../types";
export const useDownloadFile = (
  urlParam: string,
  options?: UseQueryCustomOptions<FileDownloadUrl>
) => {
  return useQuery({
    queryKey: keys.teams.teams(`@me/files/${urlParam}`),
    queryFn: () => api.teams.downloadFile(urlParam).then((res) => res.result),
    ...options,
  });
};
