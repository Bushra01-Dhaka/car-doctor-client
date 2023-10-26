import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Error from "../Pages/Error/Error";
import About from "../Pages/HomePage/About/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('/services.json')
        },
        {
          path:"/about",
          element:<PrivateRoutes><About></About></PrivateRoutes>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element: <SignUp></SignUp>
        }
      ]
    },

  ]);

export default router;