import path from 'path';
import VuePlugin from '@vitejs/plugin-vue';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  base: isProduction ? '/shrink-pdf/' : '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'src/images'),
    },
  },

  plugins: [VuePlugin()],
};
