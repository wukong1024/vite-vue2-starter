import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue2";
import path from "path";
import Components from "unplugin-vue-components/vite"; // 按需加载自定义组件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // 按需引入
      dts: true,
      dirs: ["src/components"],
    }),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  define: {
    "process.env": {},
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/assets/css/page.scss" as *;`,
      },
    },
  },
});
