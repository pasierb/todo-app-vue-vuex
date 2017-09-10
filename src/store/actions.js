import api from '../api';
import {
  TODO_CREATE_SUCCEEDED,
  TODO_UPDATE_SUCCEEDED,
  TODOS_FETCH_SUCCEEDED,
  TODO_DELETE_SUCCEEDED,
} from './mutationTypes';
import { 
  TODO_CREATE,
  TODO_UPDATE,
  TODOS_FETCH,
  TODO_DELETE,
} from './actionTypes';


export default {
  [TODO_CREATE]({ commit }, todo) {
    api.createTodo(todo).then((newTodo) => {
      commit(TODO_CREATE_SUCCEEDED, newTodo)
    });
  },
  [TODO_UPDATE]({ commit }, { todo, attributes}) {
    api.updateTodo(todo, attributes).then(updatedTodo => {
      commit(TODO_UPDATE_SUCCEEDED, updatedTodo)
    });
  },
  [TODOS_FETCH]({ commit }) {
    api.fetchTodos().then(todos => {
      commit(TODOS_FETCH_SUCCEEDED, todos)
    });
  },
  [TODO_DELETE] ({ commit }, { todo }) {
    api.deleteTodo(todo).then(() => {
      commit(TODO_DELETE_SUCCEEDED, todo);
    })
  }
};
