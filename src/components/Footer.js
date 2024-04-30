import React from "react";
import Navigation from "./Navigation";
import Button from "./Button";

const Footer = () => {
  return (
    <footer class="row footer container-all">
      <div class="row footer-row">
        <Navigation />
        <div>
          <Button value="Book a demo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;