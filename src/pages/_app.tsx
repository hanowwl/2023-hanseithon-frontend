import { useState } from "react";

import type { AppProps } from "next/app";

import { Global, Theme, ThemeProvider } from "@emotion/react";

import { Footer, Navbar } from "src/components/common";
import { NAVBAR_MENU, STAFF_LIST } from "src/constants";
import { darkTheme, globalStyle } from "src/styles";

export default function App({ Component, pageProps }: AppProps) {
  const [theme] = useState<Theme>(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle(theme)} />

      <Navbar
        menu={NAVBAR_MENU}
        actions={[{ size: "small", text: "한세톤 참여하기", href: "/auth/register" }]}
      />
      <Component {...pageProps} />
      <Footer staffList={STAFF_LIST} />
    </ThemeProvider>
  );
}
