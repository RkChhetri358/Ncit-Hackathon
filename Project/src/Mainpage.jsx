import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./Mainpage.css"
import NeonBackground from './components/NeonBackground.jsx'
export default function Mainpage() {
  return (
    <>
    <div className="mainbody">
      <div className="leftnav">
      <Navbar/>
      </div>
      <div className="rightcontent">
      <NeonBackground/>
      
      </div>

      </div>
    </>
  )
}
