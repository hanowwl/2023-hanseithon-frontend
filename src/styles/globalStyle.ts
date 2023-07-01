import { Theme, css } from "@emotion/react";

import { reset } from "./reset";

export const globalStyle = (theme: Theme) => css`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    width: 100%;
    min-height: 100%;
  }

  html {
    font-size: 10px;
  }

  body {
    color: ${theme.color.text.primary.default};
    background-color: ${theme.color.background};
  }

  #__next {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    letter-spacing: -0.04em;
  }
`;
