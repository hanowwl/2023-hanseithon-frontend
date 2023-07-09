import { SerializedStyles, Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

import { ButtonCustomProps, ButtonSize, ButtonVariant } from ".";

const fillWidth = css`
  width: 100%;
`;

const sizes: Record<ButtonSize, SerializedStyles> = {
  large: css`
    font-size: 1.8rem;
    padding: 1.2rem 2rem;
    border-radius: 0.6rem;
  `,
  medium: css`
    font-size: 1.6rem;
    padding: 1rem 1.6rem;
    border-radius: 0.6rem;
  `,
  small: css`
    font-size: 1.4rem;
    padding: 0.8rem 1.2rem;
    border-radius: 0.6rem;
  `,
};

const variants: Record<ButtonVariant, (theme: Theme) => SerializedStyles> = {
  primary: (theme) => css`
    color: ${theme.color.text.primary.default};
    background-color: ${theme.color.primary.default};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.color.primary.darker};
    }

    &:disabled {
      background-color: ${theme.color.primary.lighter};
    }
  `,

  danger: (theme) => css`
    color: ${theme.color.text.primary.default};
    background-color: ${theme.color.danger.default};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.color.danger.darker};
    }

    &:disabled {
      background-color: ${theme.color.danger.lighter};
    }
  `,
};

export const ButtonElement = styled.button<Required<ButtonCustomProps>>`
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-weight: 600;
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  letter-spacing: -0.04em;

  cursor: pointer;
  transition: background-color 150ms;

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) => sizes[props.size]}
  ${(props) => variants[props.variant](props.theme)}
  ${(props) => props.fillWidth && fillWidth}
`;
