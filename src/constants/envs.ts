export const ENV = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  MODE: process.env.NODE_ENV,
  HOSTNAME:
    process.env.NODE_ENV === "production" ? "https://hanseithion.com" : "http://localhost:3000",
};
