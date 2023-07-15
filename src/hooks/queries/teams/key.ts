export const teamsKey = {
  all: ["teams"],
  allMembers: ["teams", "all", "members"],
  teams: (id: string) => ["teams", id],
  teamLogs: (id: string) => ["teams", id, "logs"],
  teamFiles: (id: string) => ["teams", id, "files"],
  teamByInviteCode: (inviteCode: string) => ["teams", "join", inviteCode],
} as const;
