
import "./Navbar.css";

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
    <a href="#" title="Search" aria-label="Signup"><i class="fa-solid fa-magnifying-glass"></i></a>
    <a href="#" title="Account" aria-label="Login"><i class="fa-regular fa-circle-user"></i></a>
   
  </div>
</nav>
    </>
  )
}
