import type { NextConfig } from 'next';

// Optional dependency: if @next/bundle-analyzer is not installed, fall back to a no-op wrapper.
// This avoids TS "Cannot find module" errors and keeps the config working in all environments.
type WithBundleAnalyzer = (opts: { enabled?: boolean }) => (cfg: NextConfig) => NextConfig;

let withBundleAnalyzer: WithBundleAnalyzer = () => (cfg) => cfg;

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mod = require('@next/bundle-analyzer');
  withBundleAnalyzer = (mod.default ?? mod) as WithBundleAnalyzer;
} catch {
  // no-op
}

const nextConfig: NextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sabinascattola.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    esmExternals: true,
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/fonts/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*\\.(png|jpg|jpeg|gif|svg|webp|avif)$',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, must-revalidate' }],
      },
      {
        source: '/(favicon.ico|site.webmanifest|manifest.webmanifest)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, must-revalidate' }],
      },
    ];
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig as NextConfig);
