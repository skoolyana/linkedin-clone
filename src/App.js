import React from "react";
import Header from "./Header";
import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Post from "./Post";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header></Header>

      {!user ? (
        <Login></Login>
      ) : (
        <div className="app_body">
          <SideBar></SideBar>
          <Feed></Feed>

          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
