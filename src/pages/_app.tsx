import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import type { AppProps } from "next/app";

import { Global, Theme, ThemeProvider } from "@emotion/react";

import { setInstanceAccessToken } from "src/apis";
import { AppLayout } from "src/components/layouts";
import { QueryClientProvider, useQueryParams } from "src/hooks";
import { useAuthStore } from "src/stores";
import { darkTheme, globalStyle } from "src/styles";

import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
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
