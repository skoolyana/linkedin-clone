import Avatar from "@material-ui/core/Avatar";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./SideBar.css";

function SideBar() {

  const user = useSelector(selectUser);




  const recentItem = (topic) => (
    <div className="sidebar_recentitem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"></img>
        <Avatar src={user.photoUrl} className="sidebar_avatar">

          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who Viewed You</p>
          <p className="sidebar_statnumber"> 1157</p>
        </div>
        <div className="sidebar_stat">
          <p>Views On Post</p>
          <p className="sidebar_statnumber"> 1157</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
      </div>
    </div>
  );
}

export default SideBar;
