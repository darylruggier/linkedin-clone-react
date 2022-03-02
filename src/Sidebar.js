import React, { useReducer } from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <div className="sidebar-hash">#</div>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" />
        <Avatar src={user.photoURL} className="sidebar-avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">1,337</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">4,096</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("flexbox")}
        {recentItem("soft eng")}
        {recentItem("ux ui design")}
      </div>
    </div>
  );
};

export default Sidebar;
