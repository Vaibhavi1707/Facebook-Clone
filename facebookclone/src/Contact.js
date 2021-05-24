import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Contact.css"

function Contact({ name, profilePic }) {
    return (
        <div className = "contact">
            <Avatar src = {profilePic}/>
            <h3>{name}</h3>
        </div>
    )
}

export default Contact
