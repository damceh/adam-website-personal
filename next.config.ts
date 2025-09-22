import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Turbopack configuration
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' web3forms.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: http: blob:",
              "font-src 'self' data:",
              "connect-src 'self' web3forms.com api.web3forms.com",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' web3forms.com",
            ].join('; '),
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Bundle analyzer (only in development)
  ...(process.env.ANALYZE === 'true' ? {
    webpack: (config: unknown, context: { dev: boolean; isServer: boolean }) => {
      if (!context.dev && !context.isServer) {
        const webpackConfig = config as { plugins: unknown[] };
        try {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
          webpackConfig.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false,
            })
          );
        } catch (error) {
          console.warn('Bundle analyzer not available:', error);
        }
      }
      return config;
    },
  } : {}),

  // Environment variables validation
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Output configuration for static export (if needed)
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined,

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }

    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Trailing slash configuration
  trailingSlash: false,

  // Page extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // React strict mode
  reactStrictMode: true,
};

export default nextConfig;
