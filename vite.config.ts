import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import webfontDownload from 'vite-plugin-webfont-dl'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
      'https://fonts.googleapis.com/css2?family=Inter&display=swap',
    ]),
  ],
  server: {
    port: 3000,
  },
  base: './',
})
