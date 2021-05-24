import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoIcon from '@material-ui/icons/Photo';
import MoodIcon from '@material-ui/icons/Mood';
import React from 'react';
import "./MessageSender.css";

function MessageSender() {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className = "messageSender">
            <div className = "messageSender__top">
                <Avatar />
                <form>
                    <input className = "messageSender__input" 
                    placeholder = {"What's on your mind?"} />
                    <input placeholder = "image URL (Optional)" />

                    <button onClick = {handleSubmit} type = "submit">
                        Hidden submit
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
