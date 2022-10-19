import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("TodoList", defineAsyncComponent(() => import("D:/program/open/csss/docs/.vuepress/components/TodoList.vue")))
  },
}
