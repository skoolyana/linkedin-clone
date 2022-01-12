import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if(!name) {
      return alert("Please Enter a Full Name");
    }

    createUserWithEmailAndPassword(auth,email,password).then((userCredential)=> {

      const dbuser = userCredential.user;


      console.log("profilePic in register");

      console.log(profilePic);


     updateProfile(dbuser,{
       displayName:name,
       photoURL:profilePic,

     }).then( () => {

      dispatch(login({
        email:dbuser.email,
        uid: dbuser.uid,
        displayName:name,
        photoUrl:profilePic

      }))

     }

     ).catch(error => alert(error))

    })

  };

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth,email,password).then((userCredential)=> {

      const loginuser = userCredential.user;

      console.log("user12");
      console.log(loginuser);



      dispatch(login({
        email:loginuser.email,
        uid: loginuser.uid,
        displayName:loginuser.displayName,
        photoUrl:loginuser.photoURL

      }));

     

    }).catch(error => alert(error));

    
  };

  return (
    <div className="login">
      <img src="data:image/png;base64,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"></img>

      <form>
        <input  value={name} onChange={e => setName(e.target.value)}
          placeholder="Full Name(Required if Registering)"
          type="text"
        ></input>
        <input value={profilePic} onChange={e => setprofilePic(e.target.value)} placeholder="Profile Pic Url Optional" type="text"></input>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="elon.musk@gmail.com" type="email"></input>
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"></input>
        <button  type="submit" onClick={loginToApp}>
          {" "}
          Sign In
        </button>
      </form>
      <p>
        Not a Member ?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
