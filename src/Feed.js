import { React, useState,useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import InputOptions from "./InputOptions";
import Post from "./Post";
import { db } from "./firebase";
import { collection, FieldValue, onSnapshot, query, serverTimestamp } from "firebase/firestore";
import { doc, addDoc, orderBy } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { getFirestore} from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from 'react-flip-move';


function Feed() {

  
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);

  const [input, setInput] = useState('');

    // Piece of Code which runs based on a Condition
    useEffect(() => {
        const queryConst = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    
        onSnapshot(queryConst, (snapshot) => {
            
        setPosts(snapshot.docs.map((doc) => 
        ({
            id:doc.id,
            data:doc.data(),

        })
        ));
        
        });
      }, []);
    

  const sendPost = (e) => {
    e.preventDefault();
    console.log("this is the photo"+user.photoURL);
    
    // Add a new document in collection "cities"
    addDoc(collection(db, "posts"), 
    {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl:user.photoUrl || '',
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
  
  };

  return (
    <div className="feed">
      <div className="feed_input_container">
        <div className="feed_input">
          <CreateIcon></CreateIcon>
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text"></input>
            <button onClick={sendPost } type="submit">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="feed_inputOptions">
        <InputOptions
          Icon={ImageIcon}
          title="Photo"
          color="#70B5F9"
        ></InputOptions>
        <InputOptions
          Icon={SubscriptionsIcon}
          title="Video"
          color="#E7A33E"
        ></InputOptions>
        <InputOptions
          Icon={EventNoteIcon}
          title="Event"
          color="#C0CBCD"
        ></InputOptions>
        <InputOptions
          Icon={CalendarViewDayIcon}
          title="Write Article"
          color="#7FC15E"
        ></InputOptions>
      </div>

<FlipMove>
      {posts.map(({
          id, data: {name,description,message,photoUrl}}) => (
        <Post
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}

        
        
        ></Post>
      ))}

</FlipMove>
    </div>
  );
}

export default Feed;
