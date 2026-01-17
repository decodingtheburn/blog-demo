import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/blog-demo/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                agenticAi: resolve(__dirname, 'agentic-ai.html'),
                glassmorphism: resolve(__dirname, 'glassmorphism.html'),
                viteVsWebpack: resolve(__dirname, 'vite-vs-webpack.html'),
            },
        },
    },
});
