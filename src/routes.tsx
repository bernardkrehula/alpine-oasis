import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./layouts/dasboard";
import Apartments from "./pages/apartments";

const router = createBrowserRouter([
  {
    element: <Dashboard />,
    path: "/",
    children: [
      {
        element: <Apartments />,
        path: "/apartments"
      },
    ],
  },
]);
export default router;
