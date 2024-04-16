import React from "react";
import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";
import p3 from "../assets/img/p3.jpg";
import p4 from "../assets/img/p4.jpg";
import p5 from "../assets/img/p5.jpg";
// import p6 from "../assets/img/p6.jpg";
import p7 from "../assets/img/p7.jpg";
// import p8 from "../assets/img/p8.jpg";
import p9 from "../assets/img/p9.jpg";
// import p10 from "../assets/img/p10.jpg";
const Products = () => {
  return (
    <section className="section-min section product" id="products">
      <div className="container overflow-hidden">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-heading">Featured Products</h3>
          </div>
          <div className="col-md-12">
            <div className="product-list-sliderd">
              <ul className="swiper-wrappers product-list product-list-vertical">
                <li className="swiper-slidess text-center">
                  <span className="product-list-left pull-left">
                    <span className="sale-p">sale</span>
                    <a href="#" data-target="#product-01" data-toggle="modal">
                      <img alt="product image" className="" src={p1} />
                    </a>
                  </span>
                  <a href="#" data-target="#product-01" data-toggle="modal">
                    <span className="product-list-right pull-left">
                      <span className="product-list-name h4 black-color">
                        Uniform School
                      </span>
                      <span className="product-list-price">400 ETB</span>
                      <span className="product-list-price sell-p">
                        <del>580 ETB</del>
                      </span>
                    </span>
                  </a>
                  <button
                    className="btn btn-default add-item"
                    type="button"
                    data-image={p1}
                    data-name="Winter Long Sleeve Black White "
                    data-cost={400.0}
                    data-id={1}
                  >
                    add to cart
                  </button>
                </li>
                <li className="swiper-slidess text-center">
                  <span className="product-list-left pull-left">
                    <a href="#" data-target="#product-01" data-toggle="modal">
                      <img alt="product image" className="" src={p3} />
                    </a>
                  </span>
                  <a href="#" data-target="#product-01" data-toggle="modal">
                    <span className="product-list-right pull-left">
                      <span className="product-list-name h4 black-color">
                        Uniform Private Company
                      </span>
                      <span className="product-list-price">300 ETB</span>
                    </span>
                  </a>
                  <button
                    className="btn btn-default add-item"
                    type="button"
                    data-image={p3}
                    data-name="women totes lady handbag"
                    data-cost={300.0}
                    data-id={2}
                  >
                    add to cart
                  </button>
                </li>
                <li className="swiper-slidess text-center">
                  <span className="product-list-left pull-left">
                    <span className="sale-p new-p">new</span>
                    <a href="#" data-target="#product-01" data-toggle="modal">
                      <img alt="product image" className="" src={p5} />
                    </a>
                  </span>
                  <a href="#" data-target="#product-01" data-toggle="modal">
                    <span className="product-list-right pull-left">
                      <span className="product-list-name h4 black-color">
                        Uniform Governmental Company
                      </span>
                      <span className="product-list-price">600 ETB</span>
                    </span>
                  </a>
                  <button
                    className="btn btn-default add-item"
                    type="button"
                    data-image={p5}
                    data-name="Lace water soluble sexy dress"
                    data-cost={600.0}
                    data-id={3}
                  >
                    add to cart
                  </button>
                </li>
                <li className="swiper-slidess  text-center">
                  <span className="product-list-left pull-left">
                    <a href="#" data-target="#product-01" data-toggle="modal">
                      <img alt="product image" className="" src={p7} />
                    </a>
                  </span>
                  <a href="#" data-target="#product-01" data-toggle="modal">
                    <span className="product-list-right pull-left">
                      <span className="product-list-name h4 black-color">
                        Uniform Governmental Company
                      </span>
                      <span className="product-list-price">500 ETB</span>
                    </span>
                  </a>
                  <button
                    className="btn btn-default add-item"
                    type="button"
                    data-image={p7}
                    data-name="Elegant Formal Party Dress"
                    data-cost={500.0}
                    data-id={4}
                  >
                    add to cart
                  </button>
                </li>
                <li className="swiper-slidess text-center">
                  <span className="product-list-left pull-left">
                    <span className="sale-p">sale</span>
                    <a href="#" data-target="#product-01" data-toggle="modal">
                      <img alt="product image" className="" src={p9} />
                    </a>
                  </span>
                  <a href="#" data-target="#product-01" data-toggle="modal">
                    <span className="product-list-right pull-left">
                      <span className="product-list-name h4 black-color">
                        Uniform School
                      </span>
                      <span className="product-list-price">600 ETB</span>
                      <span className="product-list-price sell-p">
                        <del>700 ETB</del>
                      </span>
                    </span>
                  </a>
                  <button
                    className="btn btn-default add-item"
                    type="button"
                    data-image={p9}
                    data-name="Mini Dress Ladies Sleeve"
                    data-cost={600.0}
                    data-id={5}
                  >
                    add to cart
                  </button>
                </li>
                <li className="swiper-slidess text-center">
                  <span className="product-list-left pull-left">
                    <a href="#" data-target="#product-01" data-toggle="modal">
                      <img alt="product image" className="" src={p1} />
                    </a>
                  </span>
                  <a href="#" data-target="#product-01" data-toggle="modal">
                    <span className="product-list-right pull-left">
                      <span className="product-list-name h4 black-color">
                        Uniform Private Company
                      </span>
                      <span className="product-list-price">500 ETB</span>
                    </span>
                  </a>
                  <button
                    className="btn btn-default add-item"
                    type="button"
                    data-image={p1}
                    data-name="Winter Long Sleeve Black White "
                    data-cost={500.0}
                    data-id={6}
                  >
                    add to cart
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade product-modal"
        id="product-01"
        role="dialog"
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content shadow">
            <a className="close" data-dismiss="modal">
              {" "}
              <span className="ti-close" />
            </a>
            <div className="modal-body">
              <div
                className="carousel slide product-slide"
                id="product-carousel"
              >
                <div className="carousel-inner cont-slider">
                  <div className="item active">
                    {" "}
                    <img alt="" src={p7} title="" />{" "}
                  </div>
                  <div className="item">
                    {" "}
                    <img alt="" src={p4} title="" />{" "}
                  </div>
                  <div className="item">
                    {" "}
                    <img alt="" src={p5} title="" />{" "}
                  </div>
                  <div className="item">
                    {" "}
                    <img alt="" src={p2} title="" />{" "}
                  </div>
                </div>
                <ol className="carousel-indicators">
                  <li
                    className="active"
                    data-slide-to={0}
                    data-target="#product-carousel"
                  >
                    {" "}
                    <img alt="" src={p7} />{" "}
                  </li>
                  <li
                    className=""
                    data-slide-to={1}
                    data-target="#product-carousel"
                  >
                    {" "}
                    <img alt="" src={p4} />{" "}
                  </li>
                  <li
                    className=""
                    data-slide-to={2}
                    data-target="#product-carousel"
                  >
                    {" "}
                    <img alt="" src={p5} />{" "}
                  </li>
                  <li
                    className=""
                    data-slide-to={3}
                    data-target="#product-carousel"
                  >
                    {" "}
                    <img alt="" src={p2} />{" "}
                  </li>
                </ol>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-push-2">
                    <div className="row">
                      <div className="col-md-7">
                        <h3 className="pull-left nk section-heading">
                          Elegant Formal Party Dress
                        </h3>
                      </div>
                      <div className="col-md-5">
                        <span className="product-right-section">
                          <span>299 ETB</span>
                          <button
                            className="btn btn-default add-item"
                            type="button"
                            data-image={p2}
                            data-name="Elegant Formal Party Dress"
                            data-cost={299.0}
                            data-id={8}
                          >
                            add to cart{" "}
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 col-md-push-2 product-description">
                    <h4 className="section-heading">Ut enim ad minim veniam</h4>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam,{" "}
                    </p>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam,{" "}
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        {" "}
                        <img
                          src={p7}
                          className="img-responsive"
                          alt="product image"
                        />{" "}
                      </div>
                      <div className="col-md-6">
                        <h4 className="section-heading">
                          Ut enim ad minim veniam
                        </h4>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                    <div className="product-tabs">
                      <ul className="nav nav-tabs">
                        <li className="active">
                          <a data-toggle="tab" href="#tab1">
                            Details
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#tab2">
                            Info tab
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#tab3">
                            Other info{" "}
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div id="tab1" className="tab-pane fade in active">
                          <h4 className="section-heading">details</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                        <div id="tab2" className="tab-pane fade">
                          <h4 className="section-heading">Info tab</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.{" "}
                          </p>
                        </div>
                        <div id="tab3" className="tab-pane fade">
                          <h4 className="section-heading">other info</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / PRODUCT MODAL */}
    </section>
  );
};

export default Products;
