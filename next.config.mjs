/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No ESLint config is shipped with this project; don't let it block builds.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
