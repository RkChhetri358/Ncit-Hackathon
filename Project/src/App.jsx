
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {  Link } from 'react-router-dom';

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Signup",
      element: <Signup />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
