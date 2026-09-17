import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves this repo at https://aseempsri.github.io/impact-cube-v2/
export default defineConfig({
  plugins: [react()],
  base: '/impact-cube-v2/',
})
