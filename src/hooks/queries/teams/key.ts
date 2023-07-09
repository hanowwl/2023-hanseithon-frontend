export const teamsKey = {
  all: ["teams"],
  allMembers: ["teams", "all", "members"],
  teams: (id: string) => ["teams", id],
  teamLogs: (id: string) => ["teams", id, "logs"],
  teamByInviteCode: (inviteCode: string) => ["teams", "join", inviteCode],
} as const;
