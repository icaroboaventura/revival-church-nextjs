import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* allow images */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pocketbase.revivalchurch.eu",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
