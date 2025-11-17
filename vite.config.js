import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// export default defineConfig({
//   // base: '/ReactVitePortfolio/',
//   base: process.env.VITE_BASE_URL,
//   plugins: [react()],
// });

export default defineConfig(({ mode }) => {
  // Load env variables based on the mode (development or production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.BASE_URL || '/',
    plugins: [react()],
  };
});
