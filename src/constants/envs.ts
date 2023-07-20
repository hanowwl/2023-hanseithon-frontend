export const ENV = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  SENTRY_DNS: process.env.NEXT_PUBLIC_SENTRY_DSN,
  MODE: process.env.NODE_ENV,
  HOSTNAME:
    process.env.NODE_ENV === "production" ? "https://hanseithon.com" : "http://localhost:3000",
};
