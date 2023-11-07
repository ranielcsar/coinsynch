/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { 
    ignoreDuringBuilds: true, 
  },
  images: {
    domains: ['coinicons-api.vercel.app'],
  },
}

module.exports = nextConfig
