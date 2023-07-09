import { instance } from "src/apis/core";
import { APIResponse } from "src/apis/core/types";

import {
  RegisterParameters,
  LoginParameters,
  LoginResponse,
  GetProfileResponse,
  GetTeamResponse,
  AllUserResponse,
} from "./types";

export const register = async (parameters: RegisterParameters) => {
  return await instance
    .post<APIResponse<void>>("/auth/register", parameters)
    .then((res) => res.data);
};

export const login = async (parameters: LoginParameters) => {
  return await instance
    .post<APIResponse<LoginResponse>>("/auth/login", parameters)
    .then((res) => res.data);
};

export const silent = async () => {
  return await instance.post<APIResponse<LoginResponse>>("/auth/silent").then((res) => res.data);
};

export const getProfile = async () => {
  return await instance.get<APIResponse<GetProfileResponse>>("/auth/me").then((res) => res.data);
};

export const getUsers = async () => {
  return await instance
    .get<APIResponse<AllUserResponse[]>>("/teams/all/members")
    .then((res) => res.data);
};

export const getTeams = async () => {
  return await instance.get<APIResponse<GetTeamResponse[]>>("/teams").then((res) => res.data);
};
