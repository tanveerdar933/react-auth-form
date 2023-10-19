import { createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import Register from "./components/Register";
import Login from "./components/Login";
import Index from "./components/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
]);