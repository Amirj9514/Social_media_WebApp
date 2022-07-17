import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="a-right">
        <form className="infoForm authForm" style={{ width: "300px" }}>
          <h3>Log in</h3>
          <div>
            <input
              className="infoInput"
              type="email"
              name="email"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="infoInput"
              placeholder="Password"
            />
          </div>
          <div>
            <span style={{ fontSize: "12px" }}>
              Don't Have An Account . Signup!
            </span>
          </div>
          <button className=" button infoButton">Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
