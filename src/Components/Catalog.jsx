import React from "react";
import responsive from "../assets/img/add2.png";
import responsive1 from "../assets/img/add1.jpg";
import responsive2 from "../assets/img/add2.jpg";
const Catalog = () => {
  return (
    <div className="catalog-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-heading">PRODUCT CATEGORIES</h3>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
            <div className="add-area">
              <a href="#">
                <div className="effect-add">
                  <img className="img-responsive" alt=" " src={responsive} />
                  <h2>School</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
            <div className="add-area">
              <a href="#">
                <div className="effect-add">
                  <img className="img-responsive" alt=" " src={responsive1} />
                  <h2>Governmental Company</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
            <div className="add-area">
              <a href="#">
                <div className="effect-add">
                  <img className="img-responsive" alt=" " src={responsive2} />
                  <h2>private Company</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
