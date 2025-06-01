/** @type {import('next').NextConfig} */
const nextConfig = {
  
  output: 'export', // Force static export
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['zyrbpakftckqpmxzqemn.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zyrbpakftckqpmxzqemn.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://aryanraj.pages.dev',
  },
  experimental: {
    esmExternals: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    
    // Optimize bundle size for Cloudflare Pages
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        maxSize: 20971520, // 20MB
        maxAsyncSize: 20971520, // 20MB
        maxInitialSize: 20971520, // 20MB
        },
      minimize: true,
    }
    
    return config
  },
}

export default nextConfig