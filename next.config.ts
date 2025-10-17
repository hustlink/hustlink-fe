// next.config.ts
import type { NextConfig } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async rewrites() {
    return {
      // Tidak perlu beforeFiles / afterFiles untuk kasus ini
      beforeFiles: [
        // (Opsional) kalau kamu punya API Next lain selain NextAuth yang harus tetap di Next, whitelist di sini.
        // { source: "/api/webhooks/:path*", destination: "/api/webhooks/:path*" },
      ],
      afterFiles: [],
      // Proxy ke Nest hanya jika Next tidak punya match (fallback)
      fallback: [
        { source: "/api/:path*", destination: `${API_URL}/:path*` },
      ],
    };
  },
};

export default nextConfig;
