import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Complaint from './components/Complaint/Complaint';

function App() {
  return (

    <Router>
      <Navbar />
      
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/complaint" element={<Complaint/>} />
        </Routes>
      <footer>
 <Footer />
      </footer>
      </div>
     
    </Router>
  );

}

export default App;
