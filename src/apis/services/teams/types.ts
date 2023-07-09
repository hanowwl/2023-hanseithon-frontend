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

export interface TeamMember {
  isLeader: boolean;
  position: TeamMemberPosition;
  name: string;
  profileUrl: string;
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
