import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "./root/Root";
import Register from "./components/Register";
import Login from "./components/Login";
import Index from "./components/Index";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./components/RequireAuth";
import UsersList from "./components/UsersList";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* public routes */}
      <Route index element={<Index />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="usersList" element={<UsersList />} />
      </Route>
    </Route>
  )
);