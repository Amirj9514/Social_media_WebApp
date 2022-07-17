import React from "react";
import PostMain from "../../components/PostSide/PostMain/postMain";
import ProfileSide from "../../components/ProfileSide/profileSide";
import RightSideMain from "../../components/RightSide/RightSideMain/RightSideMain";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="profileSide">
          <ProfileSide />
        </div>
        <div className="postSide">
          <PostMain />
        </div>
        <div className="rightSide">
          <RightSideMain />
        </div>
      </div>
    </>
  );
};

export default Home;
