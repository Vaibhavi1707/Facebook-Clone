import React from 'react'
import "./Header.css"

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from "./StateProvider";


function Header() {
    const [{ user }, dispatch] = useStateValue();

    return ( <div className = "header">

        <div className = "header__left" >
        <img src = "https://upload.wikimedia.org/wikipedia/commons/8/84/FaceB.png" alt = "">
        </img>

        <div className = "header__input" >
        <SearchIcon />
        <input placeholder = "Search Facebook" type = "text" />
        </div> 
        </div>

        <div className = "header__center" >
        <div className = "header__option header__option--active">
            <HomeIcon fontSize = "large" />
        </div>  
        <div className = "header__option" >
            <FlagIcon fontSize = "large" />
        </div>  
        <div className = "header__option" >
            <SubscriptionsOutlinedIcon fontSize = "large" />
        </div>  
        <div className = "header__option" >
            <StorefrontOutlinedIcon fontSize = "large" />
        </div>  
        <div className = "header__option" >
            <GroupOutlinedIcon fontSize = "large" />
        </div>  
        </div>

        <div className = "header__right" >
            <div className = "header__info">
                <Avatar src = {user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>
        </div>

        <IconButton>
            <AddIcon />
        </IconButton>

        <IconButton>
            <ForumIcon />
        </IconButton>

        <IconButton>
            <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
            <KeyboardArrowDownIcon />
        </IconButton>

        </div>
    )
}

export default Header