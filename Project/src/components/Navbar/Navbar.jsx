import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../pictures/GOVFIX.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd, faBell, faCircleInfo, faCompass, faEarth, faEnvelope, faGear, faHome, faHomeAlt, faSearch, faUserAlt, faUserCheck, faUserCircle, faUserClock } from '@fortawesome/free-solid-svg-icons'
import  "../../index.css";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons/faEarthAsia';
export default function Navbar() {
  return (
   
    <>
      <div className="navbody">
        <div className="navlogo">
          <div className="actualphoto">
          <img src={logo} height={250} alt="JAY NEPAL !" />
          </div>
        </div>
            <div className="navprofile">
                <div className="profilelogo" >
                    <FontAwesomeIcon icon={faUserCircle} style={{ color: 'black', fontSize: '40px' }}/>
                </div>
                <div className="profilename">
                    Pratishthit
                </div>
            </div>
        <div className="navnavigation">
          <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link className='links' to="/">
                <FontAwesomeIcon icon={faHomeAlt} style={{ color: 'black', fontSize: '25px' }}/>  &nbsp; Home</Link>
        </li>
          <Link  className='links' to="/notification"><FontAwesomeIcon icon={faBell} style={{ color: 'black', fontSize: '25px' }}/>&nbsp; &nbsp;Activity</Link>
        <li>
          <Link  className='links' to="/help"> <FontAwesomeIcon icon={faCircleInfo} style={{ color: 'black', fontSize: '25px' }}/>  &nbsp; Explore</Link>
        </li>
        <li>
        </li>
        <li>
          <Link  className='links' to="/settings"><FontAwesomeIcon icon={faGear} style={{ color: 'black', fontSize: '25px' }}/> &nbsp;&nbsp;Settings</Link>
        </li>
      </ul>
    </nav>
        </div>
      </div>
    </>
  );
}
