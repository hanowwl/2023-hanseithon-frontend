/* eslint-disable @typescript-eslint/no-empty-function */
import { create } from "zustand";

import { TeamMemberPosition } from "src/apis";

const DEFAULT_MODAL_STORE: ModalStore = {
  joinTeamModal: {
    position: "",
  },

  setModalState: () => {},
  resetModal: () => {},
};

export interface ModalStore {
  joinTeamModal: {
    position: TeamMemberPosition | "";
  };

  setModalState: <T extends keyof ModalStore>(modal: T, values: ModalStore[T]) => void;
  resetModal: <T extends keyof ModalStore>(modal: T) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  joinTeamModal: {
    position: "",
  },
  setModalState: (modal, values) =>
    set((prev) => ({ ...prev, [modal]: Object.assign(prev[modal], values) })),
  resetModal: (modal) => set((prev) => ({ ...prev, [modal]: DEFAULT_MODAL_STORE[modal] })),
}));
