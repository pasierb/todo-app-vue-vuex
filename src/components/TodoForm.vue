<template>
  <form @submit="submit">
    <input name="title" type="text" v-model="newTodo.title" placeholder="New todo" />
    <input type="submit" style="display: none;" />
  </form>
</template>

<script>
import { TODO_CREATE } from '../store/actionTypes';

export default {
  data: () => {
    return {
      newTodo: {}
    }
  },
  methods: {
    reset() {
      this.newTodo = {};
    },
    submit(e) {
      e.preventDefault();

      this.$store.dispatch(TODO_CREATE, this.newTodo);
      this.reset();
    }
  }
}
</script>
