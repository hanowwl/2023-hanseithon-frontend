import { css } from "@emotion/react";

export const toastify = css`
  :root {
    --toastify-toast-min-height: 5.6rem;

    --toastify-font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  .Toastify__toast {
    font-size: 1.4rem;
    line-height: 120%;
  }

  .Toastify__toast-theme--dark {
    background: rgba(45, 45, 45, 0.47);
    border-radius: 0.6rem;
    box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(7.4px);
    -webkit-backdrop-filter: blur(7.4px);
    border: 1px solid rgba(45, 45, 45, 0.2);
  }

  .Toastify__progress-bar {
    height: 0.3rem;
  }
`;
