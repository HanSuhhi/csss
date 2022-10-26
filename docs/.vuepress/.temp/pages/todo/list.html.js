export const data = JSON.parse("{\"key\":\"v-1a311bab\",\"path\":\"/todo/list.html\",\"title\":\"TODO\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Todo List\",\"slug\":\"todo-list\",\"link\":\"#todo-list\",\"children\":[]},{\"level\":2,\"title\":\"Remarkm\",\"slug\":\"remarkm\",\"link\":\"#remarkm\",\"children\":[]}],\"git\":{\"updatedTime\":1666060312000,\"contributors\":[{\"name\":\"Don\",\"email\":\"l_98b@outlook.com\",\"commits\":2}]},\"filePathRelative\":\"todo/list.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
