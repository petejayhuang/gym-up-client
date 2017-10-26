// IMPORT COMPONENTS
import Landing from './landing';
import Login from './login';
import Register from './register';
import Admin from './admin';

const routes = [
  {path: "/", component: Landing, exact: true},
  {path: "/login", component: Login},
  {path: "/register", component: Register},
  {path: "/admin", component: Admin}
]

export default routes;