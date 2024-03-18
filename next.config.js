/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["nextjs.org"], //will allow image from this source
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ], // will allow image from everywhere
  },
};

module.exports = nextConfig;
