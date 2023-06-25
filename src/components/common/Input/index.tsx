import React, { useMemo, useState } from "react";

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./styled";

export interface InputCustomProps {
  label: string;
  message?: string;
  error?: boolean;
}

export type InputProps = InputCustomProps & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", error = false, message, ...props }, ref) => {
    const [inputType, setInputType] = useState<string>(type);
    const isPasswordInput = useMemo(() => type === "password", [type]);

    const handleOnClickPasswordVisible = () => {
      setInputType(inputType === "password" ? "text" : "password");
    };

    return (
      <S.InputContainer error={error}>
        <S.InputLabel>{label}</S.InputLabel>

        <S.InputElementContainer>
          <S.InputElement ref={ref} type={inputType} {...props} />

          {isPasswordInput && (
            <S.InputPasswordVisibleButton
              type="button"
              onClick={handleOnClickPasswordVisible}
              tabIndex={-1}
            >
              <FontAwesomeIcon icon={inputType === "password" ? faEyeSlash : faEye} />
            </S.InputPasswordVisibleButton>
          )}
        </S.InputElementContainer>

        {message && <S.InputMessage>{message}</S.InputMessage>}
      </S.InputContainer>
    );
  }
);

Input.displayName = "Input";

export { Input };
