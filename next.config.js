/** @type {import('next').NextConfig} */
const nextConfig = require("next-pwa")({
    dest: "public",
});

module.exports = nextConfig({
    publicRuntimeConfig: {},
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "fr",
    },
});
