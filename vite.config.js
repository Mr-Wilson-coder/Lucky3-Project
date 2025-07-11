import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  base: '/Lucky3-Project/'  // 👈 Add this line (case-sensitive)
})
