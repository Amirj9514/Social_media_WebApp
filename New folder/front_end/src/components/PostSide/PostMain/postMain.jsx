import React from "react";
import Posts from "../Post/posts";
import PostShare from "../postShare/postShare";
import "./postMain.css";

const PostMain = () => {
  return (
    <>
      <div className="postSide">
        <PostShare />
        <Posts />
      </div>
    </>
  );
};

export default PostMain;
