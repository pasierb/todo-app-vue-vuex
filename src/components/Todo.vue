<template>
  <div>
    <label
      class="label-inline"
      :style="labelStyle"
      v-on:click="toggleCompleted"
    >
      <input
        v-if="!readOnly"
        type="checkbox"
        v-model="todo.completed"
      />
      {{ todo.title }}
    </label>
    <a v-on:click="deleteTodo"
      style="float: right; cursor: pointer;"
      v-if="!readOnly"
    >
      <i class="fa fa-trash" />
    </a>
  </div>
</template>

<script>
import { TODO_UPDATE, TODO_DELETE } from '../store/actionTypes';

export default {
  props: ['todo', 'readOnly'],
  methods: {
    toggleCompleted(e) {
      if (this.readOnly) return;

      const attributes = { completed: e.target.checked };
      this.$store.dispatch(TODO_UPDATE, { todo: this.todo, attributes });
    },
    deleteTodo(e) {
      this.$store.dispatch(TODO_DELETE, { todo: this.todo });

      e.preventDefault();
      return false;
    }
  },
  computed: {
    labelStyle() {
      return {
        textDecoration: this.todo.completed ? 'line-through' : 'none'
      }
    }
  }
}
</script>
