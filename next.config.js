const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname);
    return config;
  },
};

module.exports = nextConfig;
