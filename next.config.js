/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plab-football.s3.amazonaws.com",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
