/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

const withTM = require('next-transpile-modules')(['three'])

module.exports = nextConfig
module.exports = withTM()