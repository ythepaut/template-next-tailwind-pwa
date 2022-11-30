/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        environment: process.env.ENVIRONMENT
    },
    publicRuntimeConfig: {},
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "fr"
    }
};

module.exports = nextConfig;
