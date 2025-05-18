import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';

function App() {
  return (

    <Router>
      <Navbar />
      
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );

<<<<<<< HEAD
   <div>
    <Navbar/>
    <Login />
   <Signup/>
   </div>


    <Footer/>



    </>
  )
=======
>>>>>>> b4216a96d7fa392d0755f2e99d0276eb3348ca60
}

export default App;
