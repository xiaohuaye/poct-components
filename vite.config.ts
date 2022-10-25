import { defineConfig } from 'vite'
import * as path from 'path';

import vue from '@vitejs/plugin-vue';

function pathResolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      'components': pathResolve('./src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#005BAC',
          'link-color': '#005BAC',
        },
        additionalData:
          '@import "./src/style/index.less";',
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
})
