import axios from "axios";

import { ENV } from "src/constants";

export const instance = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true,
});

export const setInstanceAccessToken = (token?: string) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};
