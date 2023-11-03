import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "./root/Root";
import Register from "./components/Register";
import Login from "./components/Login";
import Index from "./components/Index";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./components/RequireAuth";
import UsersList from "./components/UsersList";
import Unauth from "./components/Unauth";

const ROLES = {
  "USER": 2001,
  "EDITOR": 1984,
  "ADMIN": 5150
}


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* public routes */}
      <Route index element={<Index />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="unauth" element={<Unauth />} />
      {/* protected routes */}
      <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
        <Route path="usersList" element={<UsersList />} />
      </Route>
    </Route>
  )
);