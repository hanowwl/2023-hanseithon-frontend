import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Global, Theme, ThemeProvider } from "@emotion/react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isToday from "dayjs/plugin/isToday";

// import "dayjs/locale/ko";
// FIXME: dayjs SSR client/server Hydration 충돌 이슈

import { setInstanceAccessToken } from "src/apis";
import { Footer, Navbar } from "src/components/common";
import { AppLayout } from "src/components/layouts";
import { DEFAULT_SEO, NAVBAR_MENU, STAFF_LIST } from "src/constants";
import { QueryClientProvider, useQueryParams } from "src/hooks";
import { useAuthStore } from "src/stores";
import { darkTheme, globalStyle } from "src/styles";

import "react-toastify/dist/ReactToastify.css";

dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);
dayjs.extend(isToday);
dayjs.locale("en", {
  weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
  weekdaysShort: "일_월_화_수_목_금_토".split("_"),
  weekdaysMin: "일_월_화_수_목_금_토".split("_"),
});

export default function App({ Component, pageProps }: AppProps) {
  // import "dayjs/locale/ko";
  const [theme] = useState<Theme>(darkTheme);
  const { message, messageType } = useQueryParams<{
    message: string;
    messageType: "success" | "warn" | "error" | "info";
  }>();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (message) toast[messageType ?? "info"](message);
  }, [message, messageType]);

  useEffect(() => {
    setInstanceAccessToken(accessToken);
  }, [accessToken]);

  return (
    <QueryClientProvider>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle(theme)} />

        <ToastContainer position="top-right" theme="dark" autoClose={3000} closeButton={false} />

        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
