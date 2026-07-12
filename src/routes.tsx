import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./layouts/dasboard";
import Apartments from "./pages/apartments";
import Settings from "./pages/settings";
import UserForm from "./components/UserForm";
import PrivateRoutes from "./utils/PrivateRoutes";
import PublicRoutes from "./utils/PublicRoutes";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    element: <PublicRoutes />,
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <Dashboard />,
        children: [
          {
            path: "/apartments",
            element: <Apartments />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
          {
            path: "/users",
            element: <UserForm />,
          },
        ],
      },
    ],
  },
]);

export default router;