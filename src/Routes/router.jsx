import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Error from "../Pages/Error/Error";
import About from "../Pages/HomePage/About/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/bookings";
import Contact from "../Pages/Contact/Contact";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element: <SignUp></SignUp>
        },
        {
          path:"/checkout/:id",
          element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/bookings",
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
        },
        {
          path:"/contact",
          element: <PrivateRoutes><Contact></Contact></PrivateRoutes>
        }
      ]
    },

  ]);

export default router;