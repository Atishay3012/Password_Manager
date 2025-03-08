import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   base: "./",
   build: {
    outDir: "dist", // Makes sure output is in "dist"
  }
  plugins: [react()],
})
