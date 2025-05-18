
import Signup from "../Signup/Signup";
import "./Navbar.css";
import {  Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
    <nav>
  <ul className="navbar">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <div className="nav-icons">
    <Link to ="/Signup" title="Search" aria-label="Search"><i className="fa-solid fa-magnifying-glass"></i></Link>
    <a href="#" title="Account" aria-label="Account"><i className="fa-regular fa-circle-user"></i></a>
   


  </div>
</nav>
    </>
  )
}
