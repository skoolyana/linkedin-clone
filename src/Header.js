import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQoe-L27PWUMdEN_zG-8xeRlCLOMGBeY26A&usqp=CAU"></img>

        <div className="header_search">
          <SearchIcon></SearchIcon>
          {/**/}

          <input placeholder="Search"></input>
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"></HeaderOption>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
        <HeaderOption Icon={ChatIcon} title="Messaging"></HeaderOption>
        <HeaderOption Icon={NotificationsIcon} title="Notifications "></HeaderOption>
        <HeaderOption title='Me' avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g0IIQXN2z9T6t1q1CUcxq9pqPkA8re9_Qw&usqp=CAU"}  />
      </div>
    </div>
  );
}

export default Header;
