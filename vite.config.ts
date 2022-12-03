import { defineConfig } from 'vite'
import * as path from 'path';
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import code from '@yankeeinlondon/code-builder'
import anchor from 'markdown-it-anchor'
import prism from 'markdown-it-prism'

import vue from '@vitejs/plugin-vue';

function pathResolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      'ant-design-vue/lib',
      'qrcode',
    ],
  },
  plugins: [vue(
    {
      include: [/\.vue$/, /\.md$/],
    }
  ),
  Markdown({
    markdownItOptions: {
      html: true,
      linkify: true,
      typographer: true,
    },
    markdownItSetup(md) {
      // add anchor links to your H[x] tags
      md.use(anchor)
      // add code syntax highlighting with Prism
      md.use(prism)
    },
  }),
  ],
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
