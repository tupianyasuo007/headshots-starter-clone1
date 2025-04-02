/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hzcgbsakzagvgfuektjb.supabase.co'], // 如果你从Supabase加载图片
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // 实验性功能配置
  experimental: {
    // 禁用一些可能导致问题的实验性功能
    serverComponentsExternalPackages: [],
    serverActions: true
  },
  // 这个选项有助于解决一些构建时的路由问题
  output: 'standalone',
}

module.exports = nextConfig
