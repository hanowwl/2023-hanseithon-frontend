import { instance } from "src/apis/core";
import { APIResponse } from "src/apis/core/types";

import {
  CreateTeamParameters,
  JoinTeamParameters,
  Team,
  TeamFile,
  TeamLog,
  TeamMember,
} from "./types";

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

export const getMyTeamAllFiles = async () => {
  return await instance.get<APIResponse<TeamFile[]>>("/teams/@me/files").then((res) => res.data);
};

export const getFileDownloadLink = async (id: string) => {
  return await instance.get<APIResponse<string>>(`/teams/@me/files/${id}`).then((res) => res.data);
};

export const getTeamByInviteCode = async (inviteCode: string) => {
  return await instance.get<APIResponse<Team>>(`/teams/join/${inviteCode}`).then((res) => res.data);
};

export const joinTeam = async ({ inviteCode, position }: JoinTeamParameters) => {
  return await instance
    .post<APIResponse<Team>>(`/teams/join/${inviteCode}`, { position })
    .then((res) => res.data);
};

export const createTeam = async (parameters: CreateTeamParameters) => {
  return await instance.post<APIResponse<void>>("/teams", parameters).then((res) => res.data);
};

export const leaveTeam = async () => {
  return await instance.delete<APIResponse<void>>("/teams/@me/leave").then((res) => res.data);
};

export const deleteTeam = async () => {
  return await instance.delete<APIResponse<void>>("/teams/@me").then((res) => res.data);
};
