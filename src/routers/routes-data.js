import LoginComponent from "../admin/LoginComponent";
import HomeComponent from "../admin/HomeComponent";
import ProfileComponent from "../admin/ProfileComponent";
import UserListComponent from "../user/UserListComponent";
const routes = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: LoginComponent
  },
  {
    path: '/login',
    exact: true,
    auth: false,
    component: LoginComponent
  },
  {
    path: '/home',
    exact: true,
    auth: false,
    component: HomeComponent
  },
  {
    path: '/profile',
    exact: true,
    auth: false,
    component: ProfileComponent
  },
  {
    path: '/users',
    exact: true,
    auth: false,
    component: UserListComponent
  }
];

export default routes;