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

}

export default App;
