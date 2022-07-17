import React from "react";
import FollowerCard from "../followerCard/followerCard";
import LogoSearch from "../logoSearch/logoSearch";
import ProfileCard from "../ProfileCard/profileCard";
import "./profile.css";

const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard location={"homepage"} />
      <FollowerCard />
    </div>
  );
};

export default ProfileSide;
