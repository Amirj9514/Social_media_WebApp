import React from "react";
import "./RightSideMain.css";
import Home from "../../../img/home.png";
import Noti from "../../../img/noti.png";
import Comment from "../../../img/comment.png";
import { IoSettingsOutline } from "react-icons/io5";
import TrendCard from "../TrendCard/TrendCard";
import { Link } from "react-router-dom";

const RightSideMain = () => {
  return (
    <>
      <div className="RightSide">
        <div className="navIcons">
          <Link to={"/home"}>
            <img src={Home} alt="" />
          </Link>
          <IoSettingsOutline />
          <img src={Noti} alt="" />
          <img src={Comment} alt="" />
        </div>
        <TrendCard />
        <button className="button r-button">Share</button>
      </div>
    </>
  );
};

export default RightSideMain;
