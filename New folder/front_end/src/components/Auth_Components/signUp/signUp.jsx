import React from "react";
import { useState } from "react";
import "./signUp.css";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "../../../Action/AuthAction";

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    rePassword: "",
    username: "",
  });
  const [rePassword, setRePassword] = useState(true);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // if (!data.rePassword !== rePassword) {
      //   setRePassword(false);
      // }
      data.password === data.rePassword
        ? dispatch(signUp(data))
        : setRePassword(false);
    } else {
      dispatch(login(data));
    }
  };
  const resetForm = () => {
    setRePassword(true);
    setData({
      firstName: "",
      lastName: "",
      password: "",
      rePassword: "",
      username: "",
    });
  };
  console.log(loading);
  return (
    <>
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>{isSignUp ? "Sign Up" : "Log in"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                name="firstName"
                className="infoInput"
                placeholder="First Name"
                onChange={handelChange}
                value={data.firstName}
              />
              <input
                type="text"
                name="lastName"
                className="infoInput"
                placeholder="Last Name"
                onChange={handelChange}
                value={data.lastName}
              />
            </div>
          )}

          <div>
            <input
              className="infoInput"
              type="email"
              name="username"
              placeholder="Username"
              onChange={handelChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              style={{
                border: rePassword ? "" : "1px solid red",
              }}
              type="password"
              name="password"
              className="infoInput"
              placeholder="Password"
              onChange={handelChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                style={{
                  border: rePassword ? "" : "1px solid red",
                }}
                type="password"
                name="rePassword"
                className="infoInput"
                placeholder="Re-Password"
                onChange={handelChange}
                value={data.rePassword}
              />
            )}
          </div>
          <span
            style={{
              display: rePassword ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              marginTop: "-10px",
            }}
          >
            * Confirm Password is not same
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already Have An Account . Login!"
                : "Don't have a Account . Sign Up"}
            </span>
          </div>
          <button
            onClick={handelSubmit}
            className=" button infoButton"
            disabled={loading}
          >
            {loading ? "Loading...." : isSignUp ? "Sign Up" : "Log in"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
