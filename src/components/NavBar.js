import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      {/* Logo leading to home page */}
      <Link className="nav-link text-align-center" to="/">
        <div className="brand-container">
          <div className="navbar-brand p-0">
            <img
              src={`${process.env.PUBLIC_URL}/food-court.svg`}
              alt="logo"
              width="50"
            />
          </div>
          <div className="navbar-brand p-0 brandname">EAT MORE</div>
        </div>
      </Link>

      {/* Menu button for mobile screen */}

      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu - collapsible - for mobile screen */}

      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav nav-fill">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/order-food">
              Order food
            </Link>
          </li>
        </ul>

        <span className="nav-item ml-auto mr-5 align-sm-center btn">
          <Cart />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
