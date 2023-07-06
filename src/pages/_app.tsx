import { useState } from "react";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Global, Theme, ThemeProvider } from "@emotion/react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isToday from "dayjs/plugin/isToday";

// import "dayjs/locale/ko";
// FIXME: dayjs SSR client/server Hydration 충돌 이슈

import { Footer, Navbar } from "src/components/common";
import { DEFAULT_SEO, NAVBAR_MENU, STAFF_LIST } from "src/constants";
import { darkTheme, globalStyle } from "src/styles";

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
