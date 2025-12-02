import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    assetsInlineLimit: 0, // Disable inlining assets
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  base: './', // Use relative paths for assets
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
    host: true, // Listen on all addresses
  },
})
