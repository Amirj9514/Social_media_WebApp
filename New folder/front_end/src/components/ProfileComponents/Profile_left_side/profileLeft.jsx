import React from "react";
import FollowerCard from "../../followerCard/followerCard";
import LogoSearch from "../../logoSearch/logoSearch";
import InfoCard from "./infoCard/infoCard";

import "./profileLeft.css";
const ProfileLeft = () => {
  return (
    <>
      <div className="profileSide">
        <LogoSearch />
        <InfoCard />
        <FollowerCard />
      </div>
    </>
  );
};

export default ProfileLeft;
