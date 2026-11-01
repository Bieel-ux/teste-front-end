import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-econverse': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-econverse/, ''),
      },
    },
  },
})