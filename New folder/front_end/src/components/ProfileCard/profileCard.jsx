import React from "react";
import "./profileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div className="profileCard">
        <div className="profileImages">
          <img
            src={
              user.coverPicture
                ? serverPublic + user.coverPicture
                : serverPublic + "defaultCover.jpg"
            }
            alt="alt"
          />
          <img
            src={
              user.profilePicture
                ? serverPublic + user.profilePicture
                : serverPublic + "defaultProfile.png"
            }
            alt="alt"
          />
        </div>
        <div className="profileName">
          <span>
            {user.firstName} {user.lastName}
          </span>
          <span>{user.workAt ? user.workAt : "Write about yourself"}</span>
        </div>
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>{user.following.length}</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>{user.followers.length}</span>
              <span>Followers</span>
            </div>
            {location === "profilePage" && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>{posts.length}</span>
                </div>
              </>
            )}
          </div>
          <hr />
        </div>
        {location === "profilePage" ? (
          ""
        ) : (
          <span>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/profile/${user._id}`}
            >
              {" "}
              My Profile
            </Link>
          </span>
        )}
      </div>
    </>
  );
};

export default ProfileCard;
