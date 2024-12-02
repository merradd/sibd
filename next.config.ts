import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.scss": {
          loaders: ["sass-loader"],
          as: "*.css",
        },
      },
    }
  },
  images: {
    domains: ['via.placeholder.com'], // Добавьте ваш хост сюда
  },
};

export default nextConfig;
