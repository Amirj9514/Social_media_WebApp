import React, { useState, useRef } from "react";
import "./postShare.css";
import profile from "../../../img/profileImg.jpg";
import { HiOutlinePhotograph, HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../../Action/uploadAction";

const PostShare = () => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const loading = useSelector((state) => state.postReducer.uploading);
  const { user } = useSelector((state) => state.authReducer.authData);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const dispatch = useDispatch();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };
  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };

  return (
    <>
      <div className="postShare">
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="profile"
        />
        <div>
          <input
            ref={desc}
            required
            type="text"
            placeholder="What is happening "
          />
          <div className="postOptions">
            <div
              className="option"
              style={{ color: "var(--photo)" }}
              onClick={() => imageRef.current.click()}
            >
              <HiOutlinePhotograph size={24} />
              Photo
            </div>
            <div className="option" style={{ color: "var(--video)" }}>
              <MdOutlineSlowMotionVideo size={24} />
              Video
            </div>
            <div className="option" style={{ color: "var(--location)" }}>
              <HiOutlineLocationMarker size={24} />
              Location
            </div>
            <div className="option" style={{ color: "var(--shedule)" }}>
              <BiCalendar size={24} />
              Shedule
            </div>
            <button
              type="submit"
              className="button ps-button"
              onClick={handelSubmit}
              disabled={loading}
            >
              {loading ? "Uplaoding..." : "Share"}
            </button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="preview">
              <AiFillCloseCircle
                size={20}
                color="red"
                onClick={() => setImage(null)}
              />
              <img src={URL.createObjectURL(image)} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostShare;
