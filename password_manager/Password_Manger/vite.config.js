import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "/",
    plugins: [react()],  // ✅ Make sure this is inside an object
    build: {
      outDir: "dist",   // ✅ Ensure build output is set correctly
    },
  };
});
