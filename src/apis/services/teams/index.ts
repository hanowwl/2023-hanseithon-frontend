import { instance } from "src/apis/core";
import { APIResponse } from "src/apis/core/types";

import { Team, TeamLog } from "./types";

export const getMyTeam = async () => {
  return await instance.get<APIResponse<Team>>("/teams/@me").then((res) => res.data);
};

export const getMyTeamAllLogs = async () => {
  return await instance.get<APIResponse<TeamLog[]>>("/teams/@me/logs").then((res) => res.data);
};

export const leaveTeam = async () => {
  return await instance.delete<APIResponse<void>>("/teams/@me/leave").then((res) => res.data);
};
