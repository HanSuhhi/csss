import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";
import { defaultTheme, defineUserConfig, NavbarConfig, SidebarConfig } from "vuepress";
import { codeBlockPlugin } from "@yanyu-fe/vuepress-plugin-code-block";

const __dirname = getDirname(import.meta.url);

enum Language {
  en_US,
  zh_CN,
}

type LanguageStruct = [en_US: string, zh_CN: string];
const definePath = (language: Language): string => (<LanguageStruct>["", "/zh-CN"])[language];

const defineNavBar = (language: Language): NavbarConfig => [
  {
    text: (<LanguageStruct>["Guide", "开始"])[language],
    link: `${definePath(language)}/guide/what-is-csss`,
  },
  {
    text: (<LanguageStruct>["Components", "组件"])[language],
    link: `${definePath(language)}/components/motivation`,
  },
  {
    text: (<LanguageStruct>["Todo", "待办"])[language],
    link: `${definePath(language)}/todo/list`,
  },
];

const defineSideBar = (language: Language): SidebarConfig => {
  const key = `${definePath(language)}/components/`;
  return {
    [key]: [
      {
        text: (<LanguageStruct>["Description", "组件简介"])[language],
        children: [`${definePath(language)}/components/motivation`, `${definePath(language)}/components/start`],
      },
      {
        text: (<LanguageStruct>["Normal Components", "常用组件"])[language],
        children: [`${definePath(language)}/components/button/Readme.md`],
      },
    ],
  };
};

export default defineUserConfig({
  base: "/csss/",
  title: "csss",
  description: "A Native CSS Initialization Lib.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  plugins: [
    registerComponentsPlugin({
      components: {
        TodoList: path.resolve(__dirname, "./components/List.vue"),
      },
    }),
    backToTopPlugin(),
    codeBlockPlugin(),
  ],
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
      description: "一个原生css初始化的库。",
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
        selectLanguageText: "选择语言",
        notFound: ["此处的页面失踪了", "或许去其他页面看看？", "明天的天气是晴天吗，嗯？", "该喝水了，多喝热水。"],
        backToHome: "返回首页",
        navbar: defineNavBar(Language.zh_CN),
        sidebar: defineSideBar(Language.zh_CN),
      },
    },
  }),
});
