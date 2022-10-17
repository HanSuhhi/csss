<script setup lang="ts">
import { todoList } from "./list";
</script>

<template>
  <ol>
    <li v-for="todo in todoList" :key="todo.time">
      <span>
        <span v-if="todo.finish">✅</span>
        {{ todo.item.join(" - ") }}</span
      >
      <span>{{ todo.time }}</span>
    </li>
  </ol>
</template>

<style scoped>
ol,
li {
  width: 100%;
}
li {
  display: flex;
  justify-content: space-between;
}
</style>
