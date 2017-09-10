import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

const state = {
  todos: []
};

const getters = {
  completedTodos(state) {
    return state.todos.filter((todo) => todo.completed);
  },
  openTodos(state) {
    return state.todos.filter((todo) => !todo.completed);
  }
};

Vue.use(Vuex);

const store = new Vuex.Store({
  mutations,
  state,
  getters,
  actions,
});

export default  store;
