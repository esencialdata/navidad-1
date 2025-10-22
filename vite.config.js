import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';


export default defineConfig({
  plugins: [react()],
      resolve: {
      alias: {
        '/src': resolve(__dirname, 'src')
      }
    },
  
  server: {
    port: 5173
  }
});
