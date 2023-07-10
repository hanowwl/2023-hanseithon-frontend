/* eslint-disable @typescript-eslint/no-empty-function */
import { create } from "zustand";

import { TeamMemberPosition, TeamType } from "src/apis";

const DEFAULT_MODAL_STORE: ModalStore = {
  joinTeamModal: {
    position: "",
  },

  createTeamModal: {
    name: "",
    description: "",
    type: "",
    position: "",
  },

  setModalState: () => {},
  resetModal: () => {},
};

export interface ModalStore {
  joinTeamModal: {
    position: TeamMemberPosition | "";
  };

  createTeamModal: {
    name: string;
    description: string;
    type: TeamType | "";
    position: TeamMemberPosition | "";
  };

  setModalState: <T extends keyof ModalStore>(modal: T, values: Partial<ModalStore[T]>) => void;
  resetModal: <T extends keyof ModalStore>(modal: T) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  joinTeamModal: DEFAULT_MODAL_STORE["joinTeamModal"],
  createTeamModal: DEFAULT_MODAL_STORE["createTeamModal"],

  setModalState: (modal, values) =>
    set((prev) => ({ ...prev, [modal]: Object.assign(prev[modal], values) })),
  resetModal: (modal) => set((prev) => ({ ...prev, [modal]: DEFAULT_MODAL_STORE[modal] })),
}));
