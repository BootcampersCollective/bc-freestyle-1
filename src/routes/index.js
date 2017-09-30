import Home from '../containers/Home';
import TodoList from '../containers/TodoList';
import About from '../containers/About';
import NotFound from '../containers/NotFound';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/todolist',
    component: TodoList,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: true
  },
  {
    path: '*',
    component: NotFound,
    exact: false
  }
]

export default routes;