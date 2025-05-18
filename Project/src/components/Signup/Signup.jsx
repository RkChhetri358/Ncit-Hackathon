import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
export default function Signup() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <>
    <div className="main">

   
      <div className="header">
        <div id="title">
          Sign up
        </div>

      </div>

      <div className="card">
        <div className="card-body">
          <div className="row">
            <label htmlFor="name">Name: </label>
            <input type="text" />
          </div>
          <div className="row">
            <label htmlFor="phone">Phone No: </label>
            <input type="text" />
          </div>
           <div className="row">
            <label htmlFor="address">Address: </label>
            <input  type="text" />
          </div>
          <div className="row">
            <label htmlFor="email">Email: </label>
            <input type="email" />
          </div>
          <div className="row">
            <label htmlFor="password">Password: </label>
            <input type="password" />
          </div>
         
          <div className="row">
            <button>Submit</button>
          </div>
         

        </div>
      </div>
       </div>
    </>


 

  );
    


}
