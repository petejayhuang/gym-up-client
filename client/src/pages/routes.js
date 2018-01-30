// IMPORT COMPONENTS
import Admin from "./Admin";
import Analytics from "./Analytics";
import CreateSession from "./CreateSession";
import Landing from "./Landing";
import Login from "./Login";
import Profile from "./Profile";
import AuthRegister from "./Register";
import Sessions from "./Sessions";
import Testing from "./Testing";

const routes = [
  { path: "/", component: Landing, exact: true },
  { path: "/admin", component: Admin },
  { path: "/analytics", component: Analytics },
  { path: "/login", component: Login },
  { path: "/profile", component: Profile },
  { path: "/register", component: AuthRegister },
  { path: "/sessions", component: Sessions },
  { path: "/testing", component: Testing },
  { path: "/create", component: CreateSession }
];

export default routes;
