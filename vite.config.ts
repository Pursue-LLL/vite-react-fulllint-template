import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],

  // 本地开发服务
  server: {
    host: true, // host设置为true才可以使用network的形式，以ip访问项目
    port: 5173, // 端口号
    // open: true, // 自动打开浏览器
    strictPort: true, // 如果端口已占用直接退出
    // 接口代理服务器
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
