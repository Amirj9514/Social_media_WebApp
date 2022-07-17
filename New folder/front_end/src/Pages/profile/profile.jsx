import React from "react";
import PostMain from "../../components/PostSide/PostMain/postMain";
import ProfileCard from "../../components/ProfileCard/profileCard";
import ProfileLeft from "../../components/ProfileComponents/Profile_left_side/profileLeft";
import RightSideMain from "../../components/RightSide/RightSideMain/RightSideMain";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <ProfileLeft />
        <div className="ProfileCenter">
          <ProfileCard location={"profilePage"} />
          <PostMain />
        </div>
        <RightSideMain />
      </div>
    </>
  );
};

export default Profile;
