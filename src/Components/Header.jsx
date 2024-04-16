import React from "react";
import logo from "../assets/img/logo 2.png";
const Header = () => {
  return (
    <nav className="navbar navbar-fixed-top shadow" id="js-nav">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-target="#myNavbar"
            data-toggle="collapse"
            type="button"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" style={{width:"100px", marginTop:"-15px"}}/>
          </a>
        </div>
        <div className="navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#products">products</a>
            </li>
            <li>
              <a href="#about">about us</a>
            </li>
            <li>
              <a href="#special">special</a>
            </li>
            <li>
              <a href="#testimonials">testimonials</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
