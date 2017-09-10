import {
  TODO_CREATE_SUCCEEDED,
  TODO_UPDATE_SUCCEEDED,
  TODOS_FETCH_SUCCEEDED,
  TODO_DELETE_SUCCEEDED,
} from './mutationTypes';

const mutations = {
  [TODO_CREATE_SUCCEEDED] (state, todo) {
    state.todos.push(Object.assign({}, todo, { id: Date.now() }));
  },
  [TODO_UPDATE_SUCCEEDED] (state, todo) {
    const index = state.todos.findIndex((item) => item.id === todo.id);

    state.todos.splice(index, 1, todo);
  },
  [TODOS_FETCH_SUCCEEDED] (state, todos) {
    state.todos = todos;
  },
  [TODO_DELETE_SUCCEEDED] (state, todo) {
    const index = state.todos.findIndex((item) => item.id === todo.id);
    
    state.todos.splice(index, 1);
  }
};

export default mutations;