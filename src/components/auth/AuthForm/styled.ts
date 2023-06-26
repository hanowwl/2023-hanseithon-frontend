import Link from "next/link";

import styled from "@emotion/styled";

import { Container } from "src/components/layouts";

export const AuthForm = styled.form`
  min-height: 42rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AuthFormRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;

  & > * {
    width: 100%;
  }
`;

export const AuthFormCol = styled.div`
  flex: 1 1 auto;
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

/**
 * Auth Form Layout
 */

export const AuthFormLayoutContainer = styled(Container)`
  height: calc(100% - 9rem);
`;

export const AuthFormLayoutInnerContainer = styled.div`
  max-width: 40rem;
  padding: 8rem 0;
  margin: 0 auto;
`;

export const AuthFormLayoutTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

export const AuthFormLayoutDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #878b92;
  margin-bottom: 4rem;
`;
