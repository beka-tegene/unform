import React from "react";
import product from "../assets/img/p7.jpg";
import product1 from "../assets/img/p9.jpg";
const Special = () => {
  return (
    <section className="countdown" id="special">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-heading">Summer Sale</h3>
          </div>
          <div className="col-md-7">
            <div className="countdown-container">
              <h3>Sexy Women Floral Embroidery</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              {/* data in countdown ul from js */}
              <ul id="countdown" className="countdown-counter" />
              {/* data in countdown ul from js */}
              <span className="countdown-price h3">
                $420.00 <del>$670.00</del>
              </span>
              <button
                className="btn btn-default add-item"
                type="button"
                data-image={product}
                data-name="Sexy Women Floral Embroidery"
                data-cost={420.0}
                data-id={9}
              >
                add to cart
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <ul className="product-list product-list-vertical">
              <li>
                <span className="product-list-left pull-left">
                  <span className="sale-p">sale</span>
                  <a href="#" data-target="#product-01" data-toggle="modal">
                    <img
                      alt="product image"
                      className="product-list-primary-img"
                      src={product}
                    />
                    <img
                      alt="product image"
                      className="product-list-secondary-img"
                      src={product1}
                    />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
