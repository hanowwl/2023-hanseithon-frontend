import { useState } from "react";

import type { AppProps } from "next/app";

import { Global, Theme, ThemeProvider } from "@emotion/react";

import { darkTheme, globalStyle } from "../styles";

export default function App({ Component, pageProps }: AppProps) {
  const [theme] = useState<Theme>(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle(theme)} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
