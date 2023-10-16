/** @type {import('next').NextConfig} */
// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.io/guides/using-nextjs/

const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withTM = require("next-transpile-modules")(["react-native-web"]);

const nextConfig = {
  images: {
    disableStaticImages: true,
    domains: ['upload.wikimedia.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/thumb**',
      },
    ],
  },
};

module.exports = withPlugins(
  [withTM, withExpo, withImages, withFonts],
  nextConfig
);