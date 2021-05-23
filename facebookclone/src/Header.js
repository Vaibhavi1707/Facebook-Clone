import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className = "header">
            
        <div className = "header__left">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/8/84/FaceB.png">
            </img>

        <div className = "header__input">
            <SearchIcon />
            <input type = "text" />
        </div>

        

        </div>

        <div className = "header__middle">

        </div>

        <div className = "header__right">

        </div>

        </div>
    )
}

export default Header
