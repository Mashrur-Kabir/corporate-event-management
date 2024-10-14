import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ServiceDetail from "../Pages/ServiceDetails/ServiceDetail";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import HireUs from "../Pages/HireUs/HireUs";

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
      },
      {
        path: "/blogs",
        element: <PrivateRoute><Blogs></Blogs></PrivateRoute>,
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/hire",
        element: <PrivateRoute><HireUs></HireUs></PrivateRoute>,
      }
    ],
  },
]);

export default router;
