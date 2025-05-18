
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
<<<<<<< HEAD
      <RouterProvider router={router}/>
      <Navbar />
      <Footer />
=======


   <div>

    <Navbar/>
   <Signup/>
   </div>


    <Footer/>



>>>>>>> 505128e8da0a3467f80d27e46bbc106e3d6a41f9
    </>
  );
}

export default App;
