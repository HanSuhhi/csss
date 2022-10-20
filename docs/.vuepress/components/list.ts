import type { LanguageStruct } from "../config";

export interface TodoListItem {
  time: string;
  item: LanguageStruct;
  finish: boolean;
  subs?: Array<TodoListItem>;
}
type TodoList = Array<TodoListItem>;

/**
 * @description project todo list
 * @description 项目代办项目
 */
export const todoList: TodoList = [
  {
    item: ["Design project components", "设计项目组件"],
    finish: false,
    time: "2022-10-17 12:35",
    subs: [
      {
        item: ["Button", "按钮 Button"],
        finish: false,
        time: "2022-10-17 12:49",
        subs: [
          {
            item: ["Normal style", "普通样式"],
            finish: false,
            time: "2022-10-19 15:43",
          },
          {
            item: ["Dark style", "暗黑模式"],
            finish: false,
            time: "2022-10-19 15:46",
          },
          {
            item: ["Disabled style", "禁用模式"],
            finish: true,
            time: "2022-10-19 15:54",
          },
          {
            item: ["Button size", "按钮尺寸"],
            finish: false,
            time: "2022-10-19 16:21",
          },
          {
            item: ["colorful style", "多色样式"],
            finish: false,
            time: "2022-10-19 16:33",
          },
          {
            item: ["props", "属性汇总"],
            finish: false,
            time: "2022-10-19 21:54",
          },
        ],
      },
      {
        item: ["P", "段落标签 P"],
        finish: false,
        time: "2022-10-19 21:53",
        subs: [
          {
            item: ["props", "属性汇总"],
            finish: false,
            time: "2022-10-19 21:54",
          },
        ],
      },
    ],
  },
  {
    item: ["Build a basic set of CSS custom properties", "设置一套基本的css变量"],
    finish: false,
    time: "2022-10-17 12:55",
    subs: [
      {
        item: ["color properties", "颜色变量"],
        finish: false,
        time: "2022-10-20 08:27",
      },
      {
        item: ["font size properties", "字体大小变量"],
        finish: true,
        time: "2022-10-20 08:28",
      },
    ],
  },

  {
    item: ["Build a doc", "搭建项目文档"],
    finish: true,
    time: "2022-10-17 11:11",
  },
];
