import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Builds straight into the repo root, which is what GitHub Pages serves.
export default defineConfig({ plugins: [react()], base: '/', build: { outDir: '..', emptyOutDir: false } })
