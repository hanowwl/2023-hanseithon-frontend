import React, { useMemo, useState } from "react";

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./styled";

export interface InputCustomProps {
  label: string;
}

export type InputProps = InputCustomProps & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", ...props }, ref) => {
    const [inputType, setInputType] = useState<string>(type);
    const isPasswordInput = useMemo(() => type === "password", [type]);

    const handleOnClickPasswordVisible = () => {
      setInputType(inputType === "password" ? "text" : "password");
    };

    return (
      <S.InputContainer>
        <S.InputLabel>{label}</S.InputLabel>

        <S.InputElementContainer>
          <S.InputElement ref={ref} type={inputType} {...props} />

          {type === "password" && (
            <S.InputPasswordVisibleButton type="button" onClick={handleOnClickPasswordVisible}>
              <FontAwesomeIcon icon={isPasswordInput ? faEyeSlash : faEye} />
            </S.InputPasswordVisibleButton>
          )}
        </S.InputElementContainer>
      </S.InputContainer>
    );
  }
);

Input.displayName = "Input";

export { Input };
