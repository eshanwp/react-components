import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        build: {
            lib: {
                entry: path.resolve(__dirname, 'src/index.ts'),
                name: 'react-components',
                fileName: (format) => `index.${format}.js`,
            },
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                    },
                },
            },
            sourcemap: true,
            emptyOutDir: true,
        },
        plugins: [
            react(),
            tsconfigPaths(),
            dts({
                exclude: ['src/**/*.stories.@(js|jsx|mjs|ts|tsx)', 'src/main.tsx'],
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./src/app/styles/variables.scss";@import "./src/app/styles/mixin.scss";',
                },
            },
        },
    };
});
