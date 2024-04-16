import React from "react";

const Counter = () => {
  return (
    <section className="text-center shadow section section-min">
      <div className="about-counter" id="about-counter">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-3 cnt1 about-counter-single">
              <div className="counter">
                {" "}
                <span className="fa fa-truck icon" />
                <h2>FREE SHIPPING</h2>
                <p>Shipping in World for orders over $99</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 cnt2 about-counter-single">
              <div className="counter">
                {" "}
                <span className="ti-gift icon" />
                <h2>SPECIAL GIFT</h2>
                <p> Give the perfect gift to your loved ones</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 cnt3 about-counter-single">
              <div className="counter">
                {" "}
                <span className="fa fa-money icon" />
                <h2>MONEY BACK</h2>
                <p>Not receiving an item applied to reward </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 cnt4 about-counter-single">
              <div className="counter">
                {" "}
                <span className="ti-headphone-alt icon" />
                <h2>Support 24/7</h2>
                <p> We are wait for you in 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
