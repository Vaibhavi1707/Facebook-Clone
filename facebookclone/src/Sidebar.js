import React from "react"
import SidebarRow from "./SidebarRow"

import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Sidebar() {
    return (
        <div className = "sidebar">
            Vaibhavi
            <SidebarRow Icon = {AccountCircleIcon} title = "Vaibhavi"/>
            <SidebarRow Icon = {LocalHospitalIcon} title = "Covid-19 Information Center"/>
            <SidebarRow Icon = {EmojiFlagsIcon} title = "Pages"/>
            <SidebarRow Icon = {PeopleIcon} title = "Friends"/>
            <SidebarRow Icon = {ChatIcon} title = "Messenger" />
            <SidebarRow Icon = {StorefrontIcon} title = "Marketplace" />
            <SidebarRow Icon = {VideoLibraryIcon} title = "Watch" />
        </div>
    )
}

export default Sidebar
