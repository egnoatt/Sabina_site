import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

// NextConfig typing may lag behind runtime-supported options.
// Extend it locally to allow `eslint.dirs` without using `any`.
type NextConfigWithEslint = NextConfig & {
  eslint?: {
    dirs?: string[];
  };
};

const nextConfig: NextConfigWithEslint = {
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
  eslint: {
    // Ensure Next lint checks the real source directory (CI previously tried a non-existent `lint/` dir).
    dirs: ['src'],
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
