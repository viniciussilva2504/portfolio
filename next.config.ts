import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  eslint: { ignoreDuringBuilds: true },
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig
