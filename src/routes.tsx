import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./layouts/dasboard";
import Apartments from "./pages/apartments";
import Settings from "./pages/settings";

const router = createBrowserRouter([
  {
    element: <Dashboard />,
    path: "/",
    children: [
      {
        element: <Apartments />,
        path: "/apartments"
      },
      {
        element: <Settings />,
        path: "/settings"
      },
    ],
  },
]);
export default router;
