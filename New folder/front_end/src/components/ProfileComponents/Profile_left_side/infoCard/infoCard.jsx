import React from "react";
import "./infoCard.css";
import { MdOutlineModeEdit } from "react-icons/md";

const InfoCard = () => {
  return (
    <>
      <div className="infoCard">
        <div className="infoCardHead">
          <h4>Your Info </h4>
          <MdOutlineModeEdit size={20} style={{ cursor: "Pointer" }} />
        </div>
        <div className="info">
          <span>
            <b>Status </b>
          </span>
          <span> Single</span>
        </div>
        <div className="info">
          <span>
            <b>Lives in </b>
          </span>
          <span>Rabwah </span>
        </div>
        <div className="info">
          <span>
            <b>Workes At </b>
          </span>
          <span> Freelancer</span>
        </div>
        <button className="button logoutButton">Logout</button>
      </div>
    </>
  );
};

export default InfoCard;
