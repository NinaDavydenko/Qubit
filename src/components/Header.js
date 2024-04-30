import React from "react";
import Button from "./Button";
import Navigation from "./Navigation";

import logo from "../images/logo.png"

const Header = () => {
  return (
    <header className="row header container-all">
      <div className="row header-row">
        <div>
          <img className="img-logo" src={logo} alt="logo" />
        </div>
        <Navigation />
        <div>
          <Button value="Book a demo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
