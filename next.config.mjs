/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          issuer: { and: [/\.(js|ts|md)x?$/] },
          type: 'asset/resource',
        });
        return config;
    },
    env: {
      API_URL: "https://caption-generator-delta.vercel.app/" || "http://localhost:3000",
  },
};

export default nextConfig;
