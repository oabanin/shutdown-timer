// const isProd = process.env.NODE_ENV === "production";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  // assetPrefix: isProd ? "/shutdown-timer/" : "",
  // basePath: isProd ? "/shutdown-timer" : "",
  output: "export" as const,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withNextIntl(nextConfig);
