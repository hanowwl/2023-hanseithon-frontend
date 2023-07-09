export type StudentGrade = keyof typeof STUDENT_GRADE;
export type StudentDepartment = keyof typeof STUDENT_DEPARTMENT;

export const STUDENT_GRADE = {
  1: "1학년",
  2: "2학년",
  3: "3학년",
} as const;

export const STUDENT_DEPARTMENT = {
  CLOUD: "클라우드보안과",
  NETWORK: "네트워크보안과",
  HACKING: "해킹보안과",
  META: "메타버스게임과",
  GAME: "게임과",
} as const;

export const STUDENT_CLASSES: Record<StudentGrade, Partial<Record<StudentDepartment, number[]>>> = {
  1: {
    CLOUD: [1, 2],
    META: [1, 2],
  },
  2: {
    CLOUD: [1, 2],
    NETWORK: [1],
    META: [1],
  },
  3: {
    HACKING: [1, 2],
    NETWORK: [1],
    GAME: [1],
  },
};
