interface TodoListItem {
  time: string;
  item: [EN: string | undefined, CN: string | undefined];
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
    item: ["Build a doc", "搭建项目文档"],
    finish: true,
    time: "2022-10-17 11:11",
  },
  {
    item: ["Build a basic set of CSS custom properties", "设置一套基本的css变量"],
    finish: false,
    time: "2022-10-17 12:55",
  },
  {
    item: ["Design project components", "设计项目组件"],
    finish: false,
    time: "2022-10-17 12:35",
    subs: [
      {
        item: ["button", "按钮"],
        finish: false,
        time: "2022-10-17 12:49",
      },
    ],
  },
];
