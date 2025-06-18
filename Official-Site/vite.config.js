import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    // Generate a _redirects file in the build output
    copyPublicDir: true,
  },
  resolve: {
    alias: {
      // This solves some issues with Firebase dependencies
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  // Add history API fallback for dev server
  server: {
    historyApiFallback: true,
  },
  // Add history API fallback for preview server
  preview: {
    port: 4173,
    historyApiFallback: true,
  },
})
  