import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
     host: '0.0.0.0',
     port: 5173,
     watch: {
       usePolling: true
     }
    
  },
  
  plugins: [preact()],
})
