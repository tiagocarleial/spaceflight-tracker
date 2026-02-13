import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ads.txt",
        destination: "https://srv.adstxtmanager.com/19390/spaceflight-tracker.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
