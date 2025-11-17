import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// const base = import.meta.env.VITE_BASE_URL;
export default defineConfig(({ mode }) => {
  // Load env variables based on the mode (development or production)
  const env = loadEnv(mode, process.cwd(), '');
  console.log(env, 'live');
  return {
    base: env || '/',
    plugins: [react()],
  };
});
