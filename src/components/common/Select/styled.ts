import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SelectContainer = styled.div<{ error: boolean }>`
  width: 100%;

  ${(props) =>
    props.error &&
    css`
      & > div:has(button) > div:first-child {
        box-shadow: inset 0 0 0 1px #f53434 !important;
      }

      & > p {
        color: #f53434 !important;
      }
    `}
`;

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

  &:has(button:disabled),
  button:disabled {
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

export const SelectOptionListContainer = styled(motion.div)`
  position: absolute;
  min-width: 100%;
  margin-top: 1.2rem;
  overflow: hidden;
  box-shadow: 0 0 15px 0px rgba(255, 255, 255, 0.1);
  z-index: 1;
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
