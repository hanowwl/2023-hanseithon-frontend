import { instance } from "src/apis/core";
import { APIResponse } from "src/apis/core/types";

import { Team, TeamLog, TeamMember } from "./types";

export const getAllTeams = async () => {
  return await instance.get<APIResponse<Team[]>>("/teams").then((res) => res.data);
};

export const getAllTeamMembers = async () => {
  return await instance
    .get<APIResponse<TeamMember[]>>("/teams/all/members")
    .then((res) => res.data);
};

export const getMyTeam = async () => {
  return await instance.get<APIResponse<Team>>("/teams/@me").then((res) => res.data);
};

export const getMyTeamAllLogs = async () => {
  return await instance.get<APIResponse<TeamLog[]>>("/teams/@me/logs").then((res) => res.data);
};

export const leaveTeam = async () => {
  return await instance.delete<APIResponse<void>>("/teams/@me/leave").then((res) => res.data);
};

export const deleteTeam = async () => {
  return await instance.delete<APIResponse<void>>("/teams/@me").then((res) => res.data);
};
