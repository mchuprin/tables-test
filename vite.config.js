import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";
import path from 'path'; 

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [
    react()
    // visualizer({
    // TODO: разобраться с visualizer
    // }) // должен быть последним
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@app": path.resolve(__dirname, 'src/app'),
      "@pages": path.resolve(__dirname, 'src/pages'),
      "@widgets": path.resolve(__dirname, 'src/widgets'),
      "@features": path.resolve(__dirname, 'src/features'),
      "@entities": path.resolve(__dirname, 'src/entities'),
      "@shared": path.resolve(__dirname, 'src/shared'),
    }
  }
})
