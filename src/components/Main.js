import React from "react";
import Button from "./Button";
import Input from "./Input";

import imgMainContainer from "../images/img-main-container.png"

const Main = () => {
  return (
    <section className="row main container-all">
      <div className="row main-container">
        <div className="col main-container-text">
          <div className="main-title">
            <p className="main-title-row1">Make ecommerce</p>
            <p className="main-title-row2">More personal.</p>
          </div>
          <p className="main-text">
            Hundreds of brands use <strong>Qubit CommerceAI</strong> to power
            the next generation of product recommendations, badging and insights
            to build exceptional customer experiences.
          </p>
          <div className="row main-row">
            <Input placeholder="Enter your email" />
            <Button isMainButton={true} value="Book a demo" />
          </div>
        </div>
        <div>
          <img
            className="img-main-container"
            src={imgMainContainer}
            alt="mainImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;