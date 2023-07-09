import { instance } from "src/apis/core";
import { APIResponse } from "src/apis/core/types";

import { Team } from "./types";

export const getMyTeam = async () => {
  return await instance.get<APIResponse<Team>>("/teams/@me").then((res) => res.data);
};
