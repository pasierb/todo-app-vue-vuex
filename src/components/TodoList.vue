<template>
  <div>
    <Todo
      v-for="todo in todos"
      :todo="todo"
      :read-only="readOnly"
      :key="todo.id"
    />
  </div>
</template>

<script>
import Todo from './Todo';

export default {
  components: { Todo },
  props: ['todos', 'readOnly']
}
</script>
