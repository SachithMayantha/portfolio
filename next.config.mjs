/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1️⃣ 🔑  turn on static export
  output: 'export',

  // 2️⃣ paths on Pages are always /<repo-name>/…
  basePath: '/portfolio',           // ⬅ repo name
  trailingSlash: true,              // this helps with GitHub 404s

  // 3️⃣ disable server-side image optimizer (no Node runtime on Pages)
  images: { unoptimized: true }
};
export default nextConfig;
