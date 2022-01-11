import React from "react";
import { auth } from "./firebase";
import "./Login.css";

function Login() {

  const register  = () => {};


  const loginToApp  = (e) => {

    e.preventDefault();

   // auth


  };

  return (
    <div className="login">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQoe-L27PWUMdEN_zG-8xeRlCLOMGBeY26A&usqp=CAU"></img>

      <form>
        <input placeholder="Full Name(Required if Registering)" type="text"></input>
        <input placeholder="Profile Pic Url Optional" type="text"></input> 
        <input placeholder="Email" type="email"></input>
        <input placeholder="Password" type="password"></input> 
        <button type="submit" onClick={loginToApp}> Sign In</button>
      
      </form>
      <p>Not a Member ?{" "} 
         <span className="login_register" onClick={register}>Register Now</span>
      </p>
    </div>
  );
}

export default Login;
