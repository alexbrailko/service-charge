/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/property',
        destination: '/',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
