import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface AuthStore {
  accessToken: string;
  setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthStore, [["zustand/persist", AuthStore]]>(
  persist(
    (set) => ({
      accessToken: "",
      setAccessToken: (token: string) => set({ accessToken: token }),
    }),
    { name: "hanseithon-auth", storage: createJSONStorage(() => sessionStorage) }
  )
);
