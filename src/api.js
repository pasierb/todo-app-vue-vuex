const storage = window.localStorage; // eslint-disable-line no-undef

function fetchTodos() {
  return new Promise((resolve, reject) => {
    try {
      if (!storage.getItem('todos')) storage.setItem('todos', JSON.stringify([]));

      resolve(JSON.parse(storage.getItem('todos')));
    } catch (e) {
      reject(e);
    }
  });
}

async function createTodo(attributes) {
  const todos = await fetchTodos();

  return new Promise((resolve, reject) => {
    const todo = Object.assign({ id: Date.now() }, attributes);

    try {
      storage.setItem('todos', JSON.stringify([...todos, todo]));

      resolve(todo);
    } catch (e) {
      reject(e);
    }
  });
}

async function updateTodo(todo, attributes) {
  const todos = await fetchTodos();
  const updatedTodo = Object.assign({}, todo, attributes);

  return new Promise((resolve, reject) => {
    try {
      const index = todos.findIndex(item => item.id === updatedTodo.id);
      const newTodos = [...todos];

      newTodos[index] = updatedTodo;
      storage.setItem('todos', JSON.stringify(newTodos));

      resolve(updatedTodo);
    } catch (e) {
      reject(e);
    }
  });
}

async function deleteTodo(todo) {
  const todos = await fetchTodos();

  return new Promise((resolve, reject) => {
    try {
      const index = todos.findIndex(item => item.id === todo.id);
      const newTodos = [...todos];

      newTodos.splice(index, 1);
      storage.setItem('todos', JSON.stringify(newTodos));

      resolve(todo);
    } catch (e) {
      reject(e);
    }
  });
}

export default { createTodo, updateTodo, fetchTodos, deleteTodo };
