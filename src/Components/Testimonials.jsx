import React from "react";
import user from "../assets/img/user.png";
import user1 from "../assets/img/user2.png";
const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-heading">Testimonials</h3>
          </div>
          <div className="testimonials-slider text-center col-md-12">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonials-container shadow">
                  {" "}
                  <img alt="user avatar" src={user} />
                  <h3>
                    {" "}
                    Martin Johe, Co-Founder / CEO <span>
                      Fastcompany ltd.
                    </span>{" "}
                  </h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonials-container shadow">
                  {" "}
                  <img alt="user avatar" src={user1} />
                  <h3>
                    {" "}
                    Martin Johe, Co-Founder / CEO <span>
                      Fastcompany ltd.
                    </span>{" "}
                  </h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonials-container shadow">
                  {" "}
                  <img alt="user avatar" src={user} />
                  <h3>
                    {" "}
                    Martin Johe, Co-Founder / CEO <span>
                      Fastcompany ltd.
                    </span>{" "}
                  </h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-pagination" />
            <div className="testimonials-slider-next right-arrow-negative">
              {" "}
              <span className="ti-arrow-right" />{" "}
            </div>
            <div className="testimonials-slider-prev left-arrow-negative">
              {" "}
              <span className="ti-arrow-left" />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
