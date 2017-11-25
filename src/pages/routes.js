// IMPORT COMPONENTS
import Admin from './admin'
import Landing from './landing'
import Login from './login'
import Profile from './profile'
import Register from './register'
import New from './newSession'

const routes = [
  {path: "/", component: Landing, exact: true},
  {path: "/admin", component: Admin},
  {path: "/login", component: Login},
  {path: "/profile", component: Profile},
  {path: "/register", component: Register},
  {path: "/new", component: New}
]

export default routes;