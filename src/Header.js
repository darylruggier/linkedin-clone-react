import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption.js";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice.js";

export const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src={LinkedInIcon} />

        <div className="header-search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
