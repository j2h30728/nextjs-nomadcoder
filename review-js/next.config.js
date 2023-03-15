/** @type {import('next').NextConfig} */

const API_KEY = "08192788a8e5af154550148c8022e396";

const nextConfig = {
  reactStrictMode: true,
  async redirect() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
