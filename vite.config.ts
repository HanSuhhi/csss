import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import Delete from "rollup-plugin-delete";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve("src/main.ts"),
      name: "csss",
      fileName: (format) => `csss.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        Delete({
          targets: ["dist/*.{svg,js}"],
          hook: "generateBundle",
        }),
      ],
    },
  },
});
