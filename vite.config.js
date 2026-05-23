import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you use a custom domain (bitnbyteit.com), keep base as '/'.
// If you host at https://<username>.github.io/<repo>/, change base to '/<repo>/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
