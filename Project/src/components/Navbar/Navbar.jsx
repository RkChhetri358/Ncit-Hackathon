
import Signup from "../Signup/Signup";
import "./Navbar.css";
import {  Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
    <nav>
  <ul class="navbar">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <div className="nav-icons">
    <Link to ="/Signup" title="Search" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></Link>
    <Link href="#" title="Account" aria-label="Account"><i class="fa-regular fa-circle-user"></i></Link>
   


  </div>
</nav>
    </>
  )
}
