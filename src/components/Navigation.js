import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className="row">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Our Products</Link>
          </li>
          <li>
            <Link to="contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;