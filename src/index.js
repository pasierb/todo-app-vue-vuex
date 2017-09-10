import Vue from 'vue';
import App from './components/App';
import store from './store';
import { TODOS_FETCH } from './store/actionTypes';

store.dispatch(TODOS_FETCH);

export default new Vue({
  el: '#app',
  store,
  components: { App },
  render: (create) => create(App)
});
