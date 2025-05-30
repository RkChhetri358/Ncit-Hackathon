import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import "./Mainpage.css"
import NeonBackground from './components/NeonBackground.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faSearch} from '@fortawesome/free-solid-svg-icons'
import Search from './components/Search.jsx';
import SearchBar from './components/SearchBar.jsx';
export default function Mainpage() {
  return (
    <>
    <div className="mainbody">
      <div className="leftnav">
      <Navbar/>
      </div>
      <div className="rightcontent">
      <div className="rightupperbox">
        <div className="upperleft">
         <Link to="/add" className='linkaddcomplaint'> <FontAwesomeIcon icon={faPlusCircle} style={{ color: '#e63946', fontSize: '40px', backgroundColor: 'transparent' }}/>ADD COMPLAINT</Link>
        </div>
        <div className="upperright">
             <SearchBar/>
        </div>
      </div>
      <div className="rightmaincontent">
        
      </div>
      </div>

      </div>
    </>
  )
}
