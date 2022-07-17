import React from "react";
import "./followerCard.css";
import { follower } from "../../Data/followerData";
const FollowerCard = () => {
  return (
    <>
      <div className="followerCard">
        <h3>Who is following You</h3>
        {follower.map((data, id) => {
          return (
            <>
              <div className="follower">
                <div>
                  <img
                    src={data.img}
                    alt="profile Pic"
                    className="followerImg"
                  />
                  <div className="name">
                    <span>{data.name}</span>
                    <span>@{data.userName}</span>
                  </div>
                </div>
                <button className="button fc_button">follow</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FollowerCard;
