import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: [
                ...refreshPaths,
                'app/Livewire/**',
            ],
        }),
        react(),
    ],
});
