import { useState } from "react";
import { ToastContainer } from "react-toastify";

import type { AppProps } from "next/app";

import { Global, Theme, ThemeProvider } from "@emotion/react";

import { Footer, Navbar } from "src/components/common";
import { NAVBAR_MENU, STAFF_LIST } from "src/constants";
import { darkTheme, globalStyle } from "src/styles";

import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  const [theme] = useState<Theme>(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle(theme)} />

      <ToastContainer position="top-right" theme="dark" autoClose={3000} closeButton={false} />

      <Navbar
        menu={NAVBAR_MENU}
        actions={[{ size: "small", text: "한세톤 참여하기", href: "/auth/register" }]}
      />
      <Component {...pageProps} />
      <Footer staffs={STAFF_LIST} />
    </ThemeProvider>
  );
}
