import { defineAsyncComponent } from "vue";

export default {
  enhance: ({ app }) => {
    app.component(
      "TodoList",
      defineAsyncComponent(() => import("/Users/ludz/Program/open/cssss/docs/.vuepress/.//TodoList.vue")),
    );
  },
};
