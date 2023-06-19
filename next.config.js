/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    emotion: true,
  },

  pageExtensions: ["tsx"],
};

module.exports = nextConfig;
