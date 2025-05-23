import React from 'react'
import "./Complaint.css";
import { NavLink, useNavigate } from "react-router-dom";




export default function Complaint() {
  return (
    <>
      <div className="sidebar">
      {/* <img src={logo} alt="Logo" style={{ marginBottom: "20px" }} /> */}
      <ul>
        <li>
          <NavLink to="transaction" className={({ isActive }) => (isActive ? "active" : "")}>
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink to="insertProducts" className={({ isActive }) => (isActive ? "active" : "")}>
            Insert Products
          </NavLink>
        </li>
        <li>
          <NavLink to="sales" className={({ isActive }) => (isActive ? "active" : "")}>
            Sales Details
          </NavLink>
        </li>
        <li>
          <NavLink to="available_items" className={({ isActive }) => (isActive ? "active" : "")}>
            Available Items
          </NavLink>
        </li>
        <li>
          <NavLink to="graph" className={({ isActive }) => (isActive ? "active" : "")}>
            Graph
          </NavLink>
        </li>
      </ul>
      
      <div className="button">

      <button className="logout-btn" >Logout</button>
      </div>
    </div>

    </>
  )
}
