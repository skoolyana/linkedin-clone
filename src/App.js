import { React, useEffect } from "react";
import Header from "./Header";
import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Post from "./Post";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userauth) => {
      if(userauth){
        // user is logged in

        dispatch(login({
          email:userauth.email,
          uid : userauth.uid,
          displayName : userauth.displayName,
          photoUrl : userauth.photoUrl
        }));

      } else {

        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header></Header>

      {!user ? (
        <Login></Login>
      ) : (
        <div className="app_body">
          <SideBar></SideBar>
          <Feed></Feed>
          <Widgets></Widgets>
        </div>
      )}
    </div>
  );
}

export default App;
