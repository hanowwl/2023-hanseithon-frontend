declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_BASE_URL: string;
    NEXT_PUBLIC_SENTRY_DSN: string;

    JWT_TOKEN_NAME: string;
    JWT_SECRET_KEY: string;
  }
}
