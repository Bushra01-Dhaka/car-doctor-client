import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>



   {/* for toasting notification styling */}
            <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#FF3811",
              color: "#fff"
            },
          },
          error: {
            style: {
              background: "red",
              color: "#fff"
            },
          },
        }}
      />
      
      {/* restoring */}
      <ScrollRestoration />
        </div>
    );
};

export default MainLayout;