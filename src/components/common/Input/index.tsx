import React from "react";

import * as S from "./styled";

export interface InputCustomProps {
  label: string;
}

export type InputProps = InputCustomProps & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
  return (
    <S.InputContainer>
      <S.InputLabel>{label}</S.InputLabel>

      <S.InputElementContainer>
        <S.InputElement ref={ref} {...props} />
      </S.InputElementContainer>
    </S.InputContainer>
  );
});

Input.displayName = "Input";

export { Input };
