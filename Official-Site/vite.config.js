import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      // Externalize deps that shouldn't be bundled
      external: [
        // Add any dependencies that should be treated as external
      ],
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
