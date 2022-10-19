<script lang="ts">
export default {
  name: "TodoList"
}
</script>

<script setup lang="ts">
import { computed, withDefaults } from "vue";
import { todoList } from "./list";
import type { TodoList } from "./list";

const props = withDefaults(defineProps<{
  language: 0 | 1;
  item?: TodoList;
  styleIndex?: number;
}>(), {
  item: todoList,
  styleIndex: 0
});

const listStyles = ['square', 'disc', 'circle'];
</script>

<template>
  <ul :style="{'list-style-type': listStyles[props.styleIndex]}">
    <li v-for="todo in props.item" :key="todo.time">
      <div>
        <span>
          <span v-if="todo.finish">✅</span>
          <span>{{ todo.item[props.language] }}</span>
        </span>
        <span>{{ todo.time }}</span>
      </div>
      <TodoList v-if="todo.subs" :styleIndex="props.styleIndex+1" :item="todo.subs" :language="props.language" />
    </li>
  </ul>
</template>

<style scoped>
.todosub-ol {
  list-style-type: upper-alpha;
}

ul,
li {
  width: 100%;
}

div {
  display: flex;
  justify-content: space-between;
}
</style>
