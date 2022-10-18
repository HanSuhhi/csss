import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Delete from "rollup-plugin-delete";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      name: "csss",
      formats: ["es"],
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
