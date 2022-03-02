import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption-icon" />}
      {avatar && <Avatar className="headerOption-icon" />}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
