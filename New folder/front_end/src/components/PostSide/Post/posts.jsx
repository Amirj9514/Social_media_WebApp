import React, { useEffect } from "react";
import Post from "./post";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../../Action/postAction";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  });
  return (
    <>
      <div className="posts">
        {loading
          ? "Feching Post...."
          : posts.map((post, id) => {
              return <Post data={post} id={id} />;
            })}
      </div>
    </>
  );
};

export default Posts;
