/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
})

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ["ik.imagekit.io"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    swSrc: 'service-worker.js',
    disable: process.env.NODE_ENV === "development",
  },
}

module.exports = withBundleAnalyzer(withPWA(nextConfig))
