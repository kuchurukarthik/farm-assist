import { Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

export const DefaultRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];

export const AuthenicatedRoutes = [
  ...DefaultRoutes,
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
