import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ServiceDetail from "../Pages/ServiceDetails/ServiceDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/corporate.json"),
      },
      {
        path: "/data/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: () => fetch("/corporate.json"), 
      }
    ],
  },
]);

export default router;
