import React from "react";
import { TrendData } from "../../../Data/trendData";
import "./TrendCard.css";
const TrendCard = () => {
  return (
    <>
      <div className="trendCard">
        <h3>Trends For You </h3>
        {TrendData.map((data, id) => {
          return (
            <>
              <div className="trend">
                <span>#{data.name}</span>
                <sapn> {data.shares}K Share</sapn>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TrendCard;
