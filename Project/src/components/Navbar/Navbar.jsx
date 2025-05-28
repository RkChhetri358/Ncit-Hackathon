import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../pictures/GOVFIX.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserAlt, faUserCheck, faUserCircle, faUserClock } from '@fortawesome/free-solid-svg-icons'
import  "../../index.css";
import { faUser } from '@fortawesome/free-regular-svg-icons';
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
                <FontAwesomeIcon icon={faUserAlt} style={{ color: 'gray', fontSize: '40px' }}/>
            </div>
            <div className="profilename">
                Pratishthit
            </div>
        </div>
        <div className="navnavigation">
         <Link to ="/login" >this is link</Link>
        </div>
      </div>
    </>
  );
}
