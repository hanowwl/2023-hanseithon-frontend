import axios from "axios";

export const API_SUFFIX = {
  BASEURL: "/",
  USERS: "/teams/all/members",
  TEAMS: "/teams",
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
});
