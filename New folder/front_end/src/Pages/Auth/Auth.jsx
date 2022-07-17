import React from "react";
import Login from "../../components/Auth_Components/Login/login";
import SignUp from "../../components/Auth_Components/signUp/signUp";
import logo from "../../img/logo.png";
import "./Auth.css";
const Auth = () => {
  return (
    <>
      <div className="auth">
        <div className="a-left">
          <img src={logo} alt="" />
          <div className="webName">
            <h1>Amir Javeed</h1>
            <h6>Explore the ideas throughout the Worlds</h6>
          </div>
        </div>
        <SignUp />
        {/* <Login /> */}
      </div>
    </>
  );
};

export default Auth;
