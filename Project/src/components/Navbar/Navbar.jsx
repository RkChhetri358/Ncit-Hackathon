import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "./pictures/GOVFIX.jpg";
export default function Navbar() {
  return (
   
    <>
      <div className="navbody">
        <div className="navlogo">
          <div className="actualphoto">
            <img src={logo} alt="JAY NEPAL !" />
          </div>
        </div>
        <div className="navprofile">
         2
        </div>
        <div className="navnavigation">
          3
        </div>
      </div>
    </>
  );
}
