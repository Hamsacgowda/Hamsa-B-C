import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Hamsa-B-C/',   // 👈 THIS IS THE FIX (repo name)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
