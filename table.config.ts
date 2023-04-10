import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/table/index.ts'),
            name: 'wave-common-front/table',
            formats: ['es', 'umd'],
            fileName: (format) => `wave.${format}.js`,
        },
        outDir: path.join(__dirname, "@wave/table"),
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
});
