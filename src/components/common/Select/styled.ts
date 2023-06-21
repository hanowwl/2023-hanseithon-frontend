import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const SelectContainer = styled.div``;

export const SelectLabel = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0.8rem 0;
`;

export const SelectInnerContainer = styled.div`
  position: relative;
`;

export const SelectElementContainer = styled.div`
  height: 4.8rem;
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  border-radius: 0.8rem;
  background-color: #101010;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.color.outline};
  transition: box-shadow 200ms;

  &:has(select:disabled),
  select:disabled {
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

export const SelectButton = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 100%;

  font-size: 1.6rem;
  font-weight: 400;
  text-align: left;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.color.text.primary.default};
  transition: color 150ms;
`;

export const SelectOptionListContainer = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 1.2rem;
`;

export const SelectOptionList = styled.ul`
  padding: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.color.input.background};
  border: 1px solid ${(props) => props.theme.color.outline};
  cursor: pointer;
  user-select: none;
`;

export const SelectOptionItem = styled.li<{ selected: boolean }>`
  padding: 1.2rem;
  border-radius: 0.8rem;
  transition: background 200ms, color 200ms;

  &:hover {
    background-color: ${(props) => props.theme.color.foreground};
  }

  ${(props) =>
    props.selected &&
    css`
      color: ${props.theme.color.primary.lighter};
      font-weight: 500;
    `}
`;

export const HiddenSelectContainer = styled.div`
  display: none;
`;
