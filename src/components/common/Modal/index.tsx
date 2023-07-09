import React, { useEffect } from "react";

import * as S from "./styled";
import { Button, ButtonProps } from "../Button";

export interface CommonModalProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export interface ConfirmModalProps extends CommonModalProps {
  type: "confirm";
  labels?: {
    ok: string;
    cancel: string;
  };
  props?: {
    ok?: Omit<ButtonProps, "onClick" | "size" | "children">;
    cancel?: Omit<ButtonProps, "onClick" | "size" | "children">;
  };
  onClickOk?: React.MouseEventHandler;
  onClickCancel?: React.MouseEventHandler;
}

export type ModalProps = ConfirmModalProps;

const ModalComponent: React.FC<ModalProps> = ({ type, title, description, children, ...props }) => {
  return (
    <S.ModalContainer
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ type: "spring", duration: 0.3 }}
    >
      <S.ModalHeader>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalDescription>{description}</S.ModalDescription>
      </S.ModalHeader>

      <S.ModalChildrenContainer>{children}</S.ModalChildrenContainer>

      {type === "confirm" && (
        <S.ModalActionsContainer>
          <Button variant="transparent" onClick={props.onClickCancel} {...props.props?.cancel}>
            {props.labels?.cancel || "취소"}
          </Button>
          <Button variant="primary" onClick={props.onClickOk} {...props.props?.ok}>
            {props.labels?.ok || "확인"}
          </Button>
        </S.ModalActionsContainer>
      )}
    </S.ModalContainer>
  );
};

const ModalOverlay: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <S.ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </S.ModalOverlay>
  );
};

export const Modal = Object.assign(ModalComponent, {
  Overlay: ModalOverlay,
});
