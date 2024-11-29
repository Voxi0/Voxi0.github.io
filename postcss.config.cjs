module.exports = {
    plugins: [
        require("autoprefixer"),
        require("cssnano")({
            preset: "default",
        }),
        require("@fullhuman/postcss-purgecss").default({
            content: [
                './src/**/*.astro', // Astro components
                './src/**/*.html',  // HTML files
                './src/**/*.js',    // JavaScript files
                './src/**/*.ts',    // TypeScript files
                './src/**/*.jsx',   // React components
                './src/**/*.tsx',   // React + TypeScript
            ],
        }),
    ],
};
