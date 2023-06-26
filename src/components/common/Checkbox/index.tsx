import React from "react";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./styled";

export interface CheckboxCustomProps {
  children: React.ReactNode;
}

export type CheckboxProps = CheckboxCustomProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onClick">;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, checked, ...props }, ref) => {
    return (
      <S.CheckboxLabel>
        <S.CheckboxCircle>
          <FontAwesomeIcon icon={faCheck} size="xs" />
        </S.CheckboxCircle>
        {children}

        <S.CheckboxElement type="checkbox" ref={ref} checked={checked} {...props} />
      </S.CheckboxLabel>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
