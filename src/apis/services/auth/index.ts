import { instance } from "src/apis/core";
import { APIResponse } from "src/apis/core/types";
import { StudentDepartment, StudentGrade } from "src/constants";

export interface RegisterParameters {
  email: string;
  password: string;
  name: string;

  student: {
    department: StudentDepartment;
    grade: StudentGrade;
    classroom: number;
    number: number;
  };
}

export const register = async (parameters: RegisterParameters) => {
  return await instance
    .post<APIResponse<void>>("/auth/register", parameters)
    .then((res) => res.data);
};

export interface LoginParameters {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export const login = async (parameters: LoginParameters) => {
  return await instance
    .post<APIResponse<LoginResponse>>("/auth/login", parameters)
    .then((res) => res.data);
};
