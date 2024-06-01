import React from "react";
import Navigation from "./Navigation";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="row footer container-all">
      <div className="row footer-row">
        <Navigation />
        <div>
          <Button value="Book a demo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;