import React from "react";
import "./HeaderOption.css";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon"></Icon>}
      {avatar && <Avatar src={user?.photoUrl} className="headerOption_avatar">
        {user?.email[0].toUpperCase()}
        </Avatar>}
      <h3 className="headerOption_title">{title}</h3>
     
    </div>
  );
}

export default HeaderOption;
