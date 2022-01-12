import Avatar from "@material-ui/core/Avatar";
import {React,forwardRef} from "react";
import InputOptions from "./InputOptions";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";




const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar> 
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message} </p>
      </div>

      <div className="post_buttons">
        <InputOptions
          Icon={ThumbUpAltOutlinedIcon}
          title="Like"
          color="gray"
        ></InputOptions>
         <InputOptions
          Icon={ChatOutlinedIcon}
          title="Comment"
          color="gray"
        ></InputOptions>
          <InputOptions
          Icon={ShareOutlinedIcon}
          title="Share"
          color="gray"
        ></InputOptions>

          <InputOptions
          Icon={SendOutlinedIcon}
          title="Send"
          color="gray"
        ></InputOptions>
      </div>
    </div>
);
})

export default Post;
