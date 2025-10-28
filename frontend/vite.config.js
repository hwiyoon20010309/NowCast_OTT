import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './components'),
      'data': path.resolve(__dirname, './data'),
      'utils': path.resolve(__dirname, './utils')
    }
  }
})