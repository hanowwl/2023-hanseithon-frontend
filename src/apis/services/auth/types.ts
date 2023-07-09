import { StudentDepartment, StudentGrade } from "src/constants";

import { TeamMember } from "../teams/types";

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

export interface LoginParameters {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export type UserRole = "GUEST" | "STUDENT" | "ADMIN";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  profileUrl: string | null;
  student: {
    department: StudentDepartment;
    grade: StudentGrade;
    classroom: number;
    number: number;
  };
  teamMember: TeamMember;
  lastLoginIp: string;
  lastLoginAt: string;
  createdAt: string;
  updatedAt: string;
}

export type GetProfileResponse = User;

export interface AllUserResponse {
  name: string;
  position: string;
  student: {
    department: string;
    grade: number;
  };
  profileUrl: null;
  createdAt: string;
}

export interface TeamMember {
  isLeader: boolean;
  position: string;
  name: string;
  profileUrl: string;
}

export interface GetTeamResponse {
  type: string;
  name: string;
  description: string;
  members: TeamMember[];
}
