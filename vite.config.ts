import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Project site: https://prajwal2431.github.io/portfolio_prajwal/
  base: '/portfolio_prajwal/',
})
