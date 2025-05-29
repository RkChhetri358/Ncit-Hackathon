import React from 'react'

import "./Mainpage.css"
import NeonBackground from '../NeonBackground.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'
export default function Mainpage() {
  return (
    <>
    <div className="mainbody">
      <div className="leftnav">
   <Sidebar/>
   
      </div>
      <div className="rightcontent">
      <NeonBackground/>
      
      </div>

      </div>
    </>
  )
}
