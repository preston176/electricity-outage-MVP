import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_API_URL: JSON.stringify(process.env.VITE_API_URL)
    }
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000 // Default to port 3000 or use the port specified by the environment variable
  }
});
