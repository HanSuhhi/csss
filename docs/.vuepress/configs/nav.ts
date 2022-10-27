import { SidebarConfig } from "vuepress";
import { range } from "lodash-es";

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
        children: [definePath(language, "/guide/what-is-csss")],
      },
    ],
    [components_key]: [
      {
        text: (<LanguageStruct>["Description", "基础内容"])[language],
        children: [definePath(language, "/components/color")],
      },
      {
        text: (<LanguageStruct>["Content Element", "内容元素"])[language],
        children: [
          definePath(language, "/components/button/Readme.md"),
          {
            text: (<LanguageStruct>["Title", "title 标题"])[language],
            link: definePath(language, "/components/title/"),
            children: ((): string[] => {
              const defineSubPath = (titleLevel: number): string => `/components/title/h${titleLevel}.md`;
              return range(1, 7).map((titleLevel) => definePath(language, defineSubPath(titleLevel)));
            })(),
          },
        ],
      },
    ],
  };
};
