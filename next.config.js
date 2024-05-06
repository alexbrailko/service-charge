/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/search-results',
        destination: '/',
        permanent: true
      },
      {
        source: '/property',
        destination: '/',
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '77.37.120.17',
        port: '',
        pathname: '/images/**'
      }
    ]
  }
};

module.exports = nextConfig;
