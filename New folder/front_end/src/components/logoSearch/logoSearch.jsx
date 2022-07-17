import React from "react";
import Logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";
import "./logoSearch.css";

const LogoSearch = () => {
  return (
    <>
      <div className="logoSearch">
        <img src={Logo} alt="logo" />
        <div className="search">
          <input type="text" placeholder="Explore" />
          <div className="SearchIcon">
            <UilSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSearch;
