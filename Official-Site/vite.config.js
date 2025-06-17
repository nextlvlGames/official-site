import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      // Remove polyfills completely
      define: {
        global: 'undefined',
      },
    },
  },
  build: {
    rollupOptions: {
    },
  },
})
