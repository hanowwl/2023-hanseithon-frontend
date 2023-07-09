import { API_SUFFIX, instance } from ".";

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

export interface Team {
  type: string;
  name: string;
  description: string;
  members: TeamMember[];
}

interface ApiResponse<T> {
  data: {
    result: T;
  };
  message: string;
  status: string;
}

export const getTeams = async (): Promise<Team[]> => {
  const { data }: ApiResponse<Team[]> = await instance.get(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `${process.env.NEXT_PUBLIC_API_URL}${API_SUFFIX.TEAMS}`,
    {
      headers: {
        Authorization: localStorage.getItem("Authorization") as string,
      },
    }
  );
  return data.result;
};

export const getUsers = async (): Promise<AllUserResponse[]> => {
  const { data }: ApiResponse<AllUserResponse[]> = await instance
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    .get(`${process.env.NEXT_PUBLIC_API_URL}${API_SUFFIX.USERS}`, {
      headers: {
        Authorization: localStorage.getItem("Authorization") as string,
      },
    });
  console.log(data);
  return data.result;
};
