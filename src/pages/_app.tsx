import { useState } from "react";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Global, Theme, ThemeProvider } from "@emotion/react";

import { Footer, Navbar } from "src/components/common";
import { DEFAULT_SEO, NAVBAR_MENU, STAFF_LIST } from "src/constants";
import { darkTheme, globalStyle } from "src/styles";

export default function App({ Component, pageProps }: AppProps) {
  const [theme] = useState<Theme>(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle(theme)} />
      <DefaultSeo {...DEFAULT_SEO} />

      <Navbar
        menu={NAVBAR_MENU}
        actions={[
          {
            size: "small",
            text: "한세톤 참여하기",
            href: "/",
            onClick: () => alert("참가 신청은 7월 10일에 오픈됩니다!"),
          },
        ]}
      />
      <Component {...pageProps} />
      <Footer staffs={STAFF_LIST} />
    </ThemeProvider>
  );
}
