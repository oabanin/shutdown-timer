const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    assetPrefix: isProd ? '/shutdown-timer/' : '',
    basePath: isProd ? '/shutdown-timer' : '',
    output: 'export'
};

export default nextConfig;