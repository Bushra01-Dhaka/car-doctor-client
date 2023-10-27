import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
import './MainLayout.css'

const MainLayout = () => {


  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty('--background-color', 'black');
      document.documentElement.style.setProperty('--text-color', 'white');
    } else {
      document.documentElement.style.setProperty('--background-color', 'white');
      document.documentElement.style.setProperty('--text-color', 'black');
    }
  }, [isDarkMode]);


    return (
        <div>
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}></Navbar>
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