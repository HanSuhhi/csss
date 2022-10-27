import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { getDirname, path } from "@vuepress/utils";
import { codeBlockPlugin } from "@yanyu-fe/vuepress-plugin-code-block";
import { defaultTheme, defineUserConfig, NavbarConfig } from "vuepress";
import { definePath, defineSideBar, Language, LanguageStruct } from "./configs/nav";

const __dirname = getDirname(import.meta.url);

const defineNavBar = (language: Language): NavbarConfig => [
  {
    text: (<LanguageStruct>["Guide", "开始"])[language],
    link: `${definePath(language)}/guide/what-is-csss`,
  },
  {
    text: (<LanguageStruct>["Components", "元素"])[language],
    link: `${definePath(language)}/components/color`,
  },
];

export default defineUserConfig({
  base: "/csss/",
  title: "csss",
  description: "A Native CSS Initialization Lib.",
  head: [["link", { rel: "icon", href: "/csss/favicon.ico" }]],
  plugins: [backToTopPlugin(), codeBlockPlugin()],
  alias: {
    "@lib": path.resolve(__dirname, "../../dist"),
  },
  locales: {
    "/": {
      lang: "en-US",
      title: "csss",
      description: "A Native CSS Initialization Lib.",
    },
    "/zh-CN/": {
      lang: "zh-CN",
      title: "csss",
      description: "一个原生 css 初始化的库。",
    },
  },
  theme: defaultTheme({
    logo: "/images/logo.png",
    repoLabel: "GitHub",
    repo: "https://github.com/HanSuhhi/csss",
    locales: {
      "/": {
        home: "/",
        selectLanguageName: "English",
        selectLanguageText: "Languages",
        navbar: defineNavBar(Language.en_US),
        sidebar: defineSideBar(Language.en_US),
      },
      "/zh-CN/": {
        home: "/zh-CN/",
        selectLanguageName: "简体中文",
        selectLanguageText: "语言",
        notFound: ["此处的页面失踪了", "或许去其他页面看看？", "明天的天气是晴天吗，嗯？", "该喝水了，多喝热水。"],
        backToHome: "返回首页",
        navbar: defineNavBar(Language.zh_CN),
        sidebar: defineSideBar(Language.zh_CN),
      },
    },
  }),
});
