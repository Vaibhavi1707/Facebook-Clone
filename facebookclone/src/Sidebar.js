import React from "react"
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"

// import ChatIcon from '@material-ui/icons/Chat';
// import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
// import PeopleIcon from '@material-ui/icons/People';
// import StorefrontIcon from '@material-ui/icons/Storefront';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Sidebar() {
    return (
        <div className = "sidebar">
            <SidebarRow title = "Vaibhavi"/>
            <SidebarRow title = "Covid-19 Information Center"/>
            <SidebarRow title = "Pages"/>
            <SidebarRow title = "Friends"/>
            <SidebarRow title = "Messenger" />
            <SidebarRow title = "Marketplace" />
            <SidebarRow title = "Videos" />
            <Sidebar Icon = {ExpandMoreIcon} title = "See more" />
        </div>
    )
}

export default Sidebar
