import { LanguageStruct } from "../configs/nav";

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
    item: ["Document", "文档"],
    finish: false,
    time: "2022-10-22 13:28",
    subs: [
      {
        item: ["color", "颜色"],
        finish: false,
        time: "2022-10-23 22:19",
      },
      {
        item: ["title", "标题"],
        finish: false,
        time: "2022-10-23 22:22",
      },
      {
        item: ["button", "按钮🔧"],
        finish: false,
        time: "2022-10-17 12:43",
      },
    ],
  },
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
            finish: true,
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
            finish: true,
            time: "2022-10-19 16:21",
          },
          {
            item: ["Dashed Button", "虚线按钮"],
            finish: true,
            time: "2022-10-20 15:59",
          },
          {
            item: ["Secondary Button", "次级按钮"],
            finish: true,
            time: "2022-10-20 22:22",
          },
          {
            item: ["colorful style", "多色样式"],
            finish: true,
            time: "2022-10-19 16:33",
          },
          {
            item: ["props", "属性汇总"],
            finish: true,
            time: "2022-10-19 21:54",
          },
          {
            item: ["css properties", "css 变量"],
            finish: false,
            time: "2022-10-22 13:22",
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
      {
        item: ["h(h1 - h6)", "标题标签(h1 - h6)"],
        finish: true,
        time: "2022-10-21 16:33",
        subs: [
          {
            item: ["capital letters", "首字母大写"],
            finish: true,
            time: "2022-10-21 21:23",
          },
          {
            item: ["center", "居中"],
            finish: true,
            time: "2022-10-21 23:18",
          },
        ],
      },
      {
        item: ["h1", "h1"],
        finish: false,
        time: "2022-10-21 22:06",
        subs: [
          {
            item: ["block crotrol", "阴影块控制"],
            finish: true,
            time: "2022-10-21 22:08",
          },
          {
            item: ["block color", "阴影块颜色"],
            finish: true,
            time: "2022-10-21 22:11",
          },
          {
            item: ["block animation", "阴影块动画"],
            finish: true,
            time: "2022-10-22 00:15",
          },
        ],
      },
      {
        item: ["h2", "h2"],
        finish: false,
        time: "2022-10-21 23:02",
        subs: [
          {
            item: ["block crotrol", "阴影块控制"],
            finish: true,
            time: "2022-10-21 23:04",
          },
          {
            item: ["block color", "阴影块颜色"],
            finish: true,
            time: "2022-10-21 23:05",
          },
          {
            item: ["block animation", "阴影块动画"],
            finish: true,
            time: "2022-10-22 00:17",
          },
        ],
      },
      {
        item: ["h3", "h3"],
        finish: true,
        time: "2022-10-21 23:02",
        subs: [
          {
            item: ["block crotrol", "阴影块控制"],
            finish: true,
            time: "2022-10-22 00:16",
          },
          {
            item: ["block color", "阴影块颜色"],
            finish: true,
            time: "2022-10-22 00:17",
          },
          {
            item: ["block animation", "阴影块动画"],
            finish: true,
            time: "2022-10-22 00:18",
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
