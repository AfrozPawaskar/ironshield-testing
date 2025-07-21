import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // This allows access from your local IP
    port: 5173,          // (optional) you can change this if needed
  },
});
