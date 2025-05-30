import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Complaint from "./components/Complaint/Complaint";
import Mainpage from './components/Mainpage/Mainpage';
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (

    <Router>
      {/* <Navbar /> */}
      
      <div>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/" element={<Login/>} />
          <Route path="/mainpage" element={<Mainpage/>} />
          
          
          <Route path="/signup" element={<Signup />} />
              <Route path="/search" element={<SearchBar/>} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/mainpage" element={<Complaint />} />

        </Routes>
      <footer>
 {/* <Footer /> */}
      </footer>
      </div>
     
    </Router>
  );

}

export default App;