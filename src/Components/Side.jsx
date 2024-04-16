import React from "react";
import bg from "../assets/img/slider/slide2.jpeg";
import bg1 from "../assets/img/slider/slide1.jpg";
const Side = () => {
  return (
    <section className="home section image-slider" id="home">
      <div className="home-slider text-center">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{ background: `url(${bg})` }}>
            <h1>
              Best Uniform<span className="hglight">Shop</span>
            </h1>
            <h2 className="home-slider-title-main">
              with working cart &amp; Chapa payment
            </h2>
            <div className="home-buttons text-start">
              {" "}
              <a href="#products" className="btn btn-lg  btn-primary">
                our products
              </a>{" "}
            </div>
            <a className="arrow bounce text-center" href="#about">
              {" "}
              <span className="ti-mouse" />{" "}
              <span className="ti-angle-double-down" />{" "}
            </a>
          </div>
        </div>
        <div className="home-pagination" />
      </div>
    </section>
  );
};

export default Side;
