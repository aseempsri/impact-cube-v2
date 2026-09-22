import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Custom domain: https://impactcube.in (GitHub Pages)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
