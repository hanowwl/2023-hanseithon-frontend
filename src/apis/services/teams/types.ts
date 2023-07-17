import { StudentDepartment } from "src/constants";

export const TeamType = {
  LIVING: "생활부문",
  GAME: "게임부분",
} as const;

export type TeamType = keyof typeof TeamType;

export const TeamMemberPosition = {
  PM: "기획자",
  DEVELOPER: "개발자",
  DESIGNER: "디자이너",
} as const;

export type TeamMemberPosition = keyof typeof TeamMemberPosition;

export const TeamLogType = {
  TEAM_CREATED: "TEAM_CREATED",
  TEAM_JOINED: "TEAM_JOINED",
  TEAM_LEFT: "TEAM_LEFT",
} as const;

export type TeamLogType = keyof typeof TeamLogType;

export interface TeamMember {
  isLeader: boolean;
  position: TeamMemberPosition;
  name: string;
  profileUrl: string;
  student: {
    department: StudentDepartment;
    grade: number;
  };
  createdAt?: string;
}

export interface Team {
  id: string;
  type: TeamType;
  name: string;
  description: string;
  inviteCode: string;
  members: TeamMember[];
  createdAt: string;
  updatedAt: string;
}

export interface TeamLog {
  id: string;
  type: TeamLogType;
  teamId: string;
  memberName: string;
  actionedAt: string;
}

export interface JoinTeamParameters {
  inviteCode: string;
  position: TeamMemberPosition;
}

export interface CreateTeamParameters {
  name: string;
  description: string;
  type: TeamType;
  position: TeamMemberPosition;
}

export interface UploadFileParameters {
  lastModified?: number;
  lastModifiedDate?: Date;
  name?: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
}
