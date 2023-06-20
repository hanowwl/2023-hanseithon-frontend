import styled from "@emotion/styled";

export const InputContainer = styled.div``;

export const InputLabel = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0.8rem 0;
`;

export const InputElementContainer = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  border-radius: 0.8rem;
  background-color: #101010;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.color.outline};
  transition: box-shadow 200ms;

  &:has(input:disabled),
  input:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.color.text.secondary.default};
  }

  &:hover {
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.color.primary.lighter};
  }

  &:focus-within {
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.color.primary.default};
  }
`;

export const InputElement = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 100%;

  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.color.text.primary.default};
  transition: color 150ms;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: ${(props) => props.theme.color.text.primary.default} !important;
  }
`;

export const InputPasswordVisibleButton = styled.button`
  outline: none;
  border: none;
  background: none;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.color.text.primary.default};
`;
