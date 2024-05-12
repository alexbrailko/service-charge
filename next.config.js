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
        protocol: 'https',
        hostname: 'service-charge.co.uk',
        port: '',
        pathname: '/images/**'
      }
    ]
  }
};

module.exports = nextConfig;
