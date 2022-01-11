import React from "react";
import "./HeaderOption.css";
import Avatar from "@material-ui/core/Avatar";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon"></Icon>}
      {avatar && <Avatar src={avatar} className="headerOption_avatar"></Avatar>}
      <h3 className="headerOption_title">{title}</h3>
     
    </div>
  );
}

export default HeaderOption;
