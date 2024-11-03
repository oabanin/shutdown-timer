const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    // assetPrefix: isProd ? '/shutdown-timer/' : '',
    basePath: isProd ? 'https://oabanin.github.io/shutdown-timer' : '',
    output: 'export'
};

export default nextConfig;