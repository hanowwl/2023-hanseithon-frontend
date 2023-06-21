import { Theme, css } from "@emotion/react";

import { reset } from "./reset";

export const globalStyle = (theme: Theme) => css`
  ${reset}

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
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
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue",
      "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    letter-spacing: -0.04em;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #a3d2ff 0%, #64a6e2 99.99%); /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255); /*스크롤바 뒷 배경 색상*/
  }
`;
