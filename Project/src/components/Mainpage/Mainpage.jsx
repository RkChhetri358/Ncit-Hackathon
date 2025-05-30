import React from 'react'
import { Link } from 'react-router-dom';

import "./Mainpage.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faSearch} from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Sidebar/Sidebar';
import SearchBar from '../SearchBar/SearchBar';


export default function Mainpage() {
  return (
    <>
    <div className="mainbody">
      <div className="leftnav">
     <Sidebar/>
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