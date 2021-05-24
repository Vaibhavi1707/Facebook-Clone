import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoIcon from '@material-ui/icons/Photo';
import MoodIcon from '@material-ui/icons/Mood';
import React, { useState } from 'react';
import "./MessageSender.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        setInput("");
        setImageUrl("");
    }

    return (
        <div className = "messageSender">
            <div className = "messageSender__top">
                <Avatar src = {user.photoURL}/>
                <form>
                    <input value = {input}
                    onChange = {(e) => setInput(e.target.value)} 
                    className = "messageSender__input" 
                    placeholder = {`What's on your mind ${user.displayName}?`} />
                    <input 
                    value = {imageUrl}
                    onChange = {(e) => setImageUrl(e.target.value)}
                    placeholder = "Image URL (Optional)" />

                    <button onClick = {handleSubmit} type = "submit">
                        Done
                    </button>
                </form>
            </div>

            <div className = "messageSender__bottom">
                <div className = "messageSender__option">
                    <VideocamIcon style = {{color: "#ff0000"}} />
                    <h4>Live Video</h4>
                </div>
                <div className = "messageSender__option">
                    <PhotoIcon style = {{color: "green"}} />
                    <h4>Photo/Video</h4>                
                </div>
                <div className = "messageSender__option">
                    <MoodIcon style = {{color: "yellow"}} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
