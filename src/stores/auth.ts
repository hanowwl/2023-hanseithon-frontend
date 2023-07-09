import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface AuthStore {
  initialize: boolean;
  accessToken: string;
  setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthStore, [["zustand/persist", AuthStore]]>(
  persist(
    (set) => ({
      initialize: false,
      accessToken: "",
      setAccessToken: (token: string) => set({ initialize: true, accessToken: token }),
    }),
    { name: "hanseithon-auth", storage: createJSONStorage(() => sessionStorage) }
  )
);
