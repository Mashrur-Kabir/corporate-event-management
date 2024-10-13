import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ServiceDetail from "../Pages/ServiceDetails/ServiceDetail";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/data/:id",
        element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
        loader: () => fetch("/corporate.json"), 
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>,
      }
    ],
  },
]);

export default router;
