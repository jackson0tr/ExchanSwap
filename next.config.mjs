/** @type {import('next').NextConfig} */

const nextConfig = {
   reactStrictMode: true,
   images: {
    domains: ['backend.exchanswap.com', 'logos-world.net']
   },
   async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://backend.exchanswap.com/api/:path*', // Proxy to Backend
        },
      ];
   }
};

export default nextConfig;
