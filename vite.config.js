import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue2";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
        // example : additionalData: `@import "./src/design/styles/variables";`
        // don't need include file extend .scss
        // 全局引入scss变量
        additionalData: `@use "./src/assets/css/page.scss";`,
      },
    },
  },
});
