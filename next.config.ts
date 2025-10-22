// next.config.ts
import type { NextConfig } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const nextConfig: NextConfig = {
    // Optimize specific packages
  transpilePackages: [
    '@wamra/gantt-task-react',
    '@radix-ui/react-alert-dialog',
    '@radix-ui/react-separator',
    '@radix-ui/react-slot',
    '@radix-ui/react-toggle',
    '@radix-ui/react-toggle-group',
    'embla-carousel-react',
  ],
    // Optimize package imports
  experimental: {
    optimizeCss: true, // Experimental CSS optimization
    optimizePackageImports: [
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-separator',
      '@radix-ui/react-slot',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
    ],
  },
  // Production optimizations 
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  //Set false Only for debugging, turn back on later!
  reactStrictMode: false,
  // For deployment optimization
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
