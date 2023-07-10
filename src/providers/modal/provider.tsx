import React, { useContext, useState } from "react";

import { AnimatePresence } from "framer-motion";

import { Modal, ModalProps } from "src/components/common";

export interface ModalProviderContext {
  open: (props: ModalProps) => void;
  close: () => void;
  closeAll: () => void;
}

export interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = React.createContext<ModalProviderContext | null>(null);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<ModalProps[]>([]);

  const open = (props: ModalProps) => {
    setModals((prev) => [props, ...prev]);
  };

  const close = () => {
    setModals((prev) => prev.slice(1));
  };

  const closeAll = () => {
    setModals([]);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        close,
        closeAll,
      }}
    >
      <AnimatePresence>
        {modals.length > 0 && (
          <Modal.Overlay>{modals.length > 0 && <Modal {...modals[0]} />}</Modal.Overlay>
        )}
      </AnimatePresence>

      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal() must be used within a ModalProvider");

  return context;
};
