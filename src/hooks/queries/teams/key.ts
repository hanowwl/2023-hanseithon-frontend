export const teamsKey = {
  teams: (id: string) => ["teams", id],
  teamLogs: (id: string) => ["teams", id, "logs"],
} as const;
