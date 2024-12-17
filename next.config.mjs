/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/duoxbuhpw/**',
          },
      ],
  },
};


export default nextConfig;
