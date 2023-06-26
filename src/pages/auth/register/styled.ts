import Link from "next/link";

import styled from "@emotion/styled";

export const AuthForm = styled.form`
  min-height: 42rem;
  display: flex;
  flex-direction: column;
`;

export const AuthFormRow = styled.div`
  width: 100%;
  display: flex;
`;

export const AuthFormInputRow = styled(AuthFormRow)`
  flex-direction: column;
  gap: 2rem;
`;

export const AuthFormCol = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const AuthFormButtonRows = styled(AuthFormRow)`
  margin-top: auto;
`;

export const AuthLink = styled(Link)`
  color: unset;
  text-decoration: none;
  transition: color 150ms;
  font-weight: 500;
  color: ${(props) => props.theme.color.primary.default};

  &:hover {
    color: ${(props) => props.theme.color.primary.lighter};
  }
`;
