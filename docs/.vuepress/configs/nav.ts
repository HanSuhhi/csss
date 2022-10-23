import { SidebarConfig } from "vuepress";

export enum Language {
  en_US,
  zh_CN,
}
export type LanguageStruct = [en_US: string, zh_CN: string];

export const definePath = (language: Language, text: string = ""): string => (<LanguageStruct>["", "/zh-CN"])[language] + text;

export const defineSideBar = (language: Language): SidebarConfig => {
  const components_key = definePath(language, "/components/");
  const guide_key = definePath(language, "/guide/");
  return {
    [guide_key]: [
      {
        text: (<LanguageStruct>["Start", "开始"])[language],
        children: [definePath(language, "/guide/what-is-csss"), definePath(language, "/guide/start")],
      },
    ],
    [components_key]: [
      {
        text: (<LanguageStruct>["Description", "基础内容"])[language],
        children: [definePath(language, "/components/color")],
      },
      {
        text: (<LanguageStruct>["Normal Components", "常用组件"])[language],
        children: [
          definePath(language, "/components/button/Readme.md"),
          {
            text: "标题 title",
            link: definePath(language, "/components/title/"),
            children: [definePath(language, "/components/title/h1.md")],
          },
        ],
      },
    ],
  };
};
