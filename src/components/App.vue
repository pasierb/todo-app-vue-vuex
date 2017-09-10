<template>
  <div class="row">
    <div class="column">
      <h3>Edit</h3>
      <TodoList :todos="openTodos" />
      <TodoForm />
      <TodoList :todos="completedTodos" />
    </div>
    <div class="column">
      <h3>Readonly</h3>
      <TodoList :todos="todos" :read-only="true" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default {
  components: { TodoList, TodoForm },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    completedTodos() {
      return this.$store.getters.completedTodos;
    },
    openTodos() {
      return this.$store.getters.openTodos;
    }
  }
}
</script>
