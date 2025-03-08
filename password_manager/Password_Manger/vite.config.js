import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],  // ✅ Ensure this is inside the object
  build: {
    outDir: "dist",   // ✅ Ensure build output is set
  },
})
