// IMPORT COMPONENTS
import Admin from './admin';
import Landing from './landing';
import Login from './login';
import Profile from './profile';
import Register from './register';

const routes = [
  {path: "/", component: Landing, exact: true},
  {path: "/admin", component: Admin},
  {path: "/login", component: Login},
  {path: "/profile", component: Profile},
  {path: "/register", component: Register}
]

export default routes;