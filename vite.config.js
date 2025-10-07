import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; 
import checker from 'vite-plugin-checker'

export default defineConfig({
  build: {
    outDir: "build",
    // TODO: надо разобраться в этом
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Разделение vendor-чанков
        },
      },
    },
    minify: 'terser',
  },
  plugins: [
    react(),
    checker({ typescript: true })
    // visualizer({
    // TODO: разобраться с visualizer
    // }) // должен быть последним
  ],
  resolve: {
    alias: {
      // alias для кастомных импортов
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
