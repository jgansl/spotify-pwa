import { fileURLToPath, URL} from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({
      manifest: { 
        icons: [
          {
            src: "/vite.svg",
            sizes: "512x512",
            type: "image/svg",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
  // build: {
  //   outDir: '../wwwroot/',
  //   emptyOutDir: true
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
