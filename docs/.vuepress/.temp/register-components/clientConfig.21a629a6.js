import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("TodoList", defineAsyncComponent(() => import("/Users/ludz/Program/open/cssss/docs/.vuepress/components/TodoList.vue"))),
      app.component("ButtonSize", defineAsyncComponent(() => import("/Users/ludz/Program/open/cssss/docs/.vuepress/components/ButtonSize.vue")))
  },
}
