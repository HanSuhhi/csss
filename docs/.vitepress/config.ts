import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/csss/",
  title: "csss",
  description: "A lib used to initialize page css",
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      {
        text: "Guide",
        link: "/guide/what-is-csss",
      },
      {
        text: "Todo",
        link: "/todo/list",
      },
    ],
  },
  locales: {},
});
