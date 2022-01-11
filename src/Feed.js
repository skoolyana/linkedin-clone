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


function Feed() {
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
    
    // Add a new document in collection "cities"
    addDoc(collection(db, "posts"), 
    {
        name: "Kulyanasun",
        description: "this is a test",
        message: input,
        photoUrl:"",
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

    
    </div>
  );
}

export default Feed;
