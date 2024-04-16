import React from "react";

const Cart = () => {
  return (
    <>
      <span
        id="items-counter"
        className="h3 cart-items-counter"
        style={{ display: "none" }}
      >
        0
      </span>
      <div className="cart-widget-container">
        <div className="cart-widget text-center">
          <a className="close" id="cart-widget-close">
            <span className="ti-close" />
          </a>
          <h1>
            Best<span className="hglight">shop</span>
          </h1>
          <h3 className="section-heading">Your cart</h3>
          <div id="cart-empty" className="cart-empty">
            <h4>
              is empty <span className="ti-face-sad icon" />{" "}
            </h4>
          </div>
          {/* container for js inject cart items content */}
          <div className="items-container" id="items" />
          {/* container for js inject cart items content */}
          <div className="cart-delivery" id="cart-delivery">
            <h4 className="section-heading">Delivery option</h4>
            <div className="custom-radio">
              <input
                id="radio1"
                type="radio"
                name="delivery"
                defaultValue={10.0}
                defaultChecked=""
              />
              <label htmlFor="radio1">domestic delivery ($10)</label>
            </div>
            <div className="custom-radio">
              <input
                id="radio2"
                type="radio"
                name="delivery"
                defaultValue={15.0}
              />
              <label htmlFor="radio2">express domestic delivery ($15) </label>
            </div>
            <div className="custom-radio">
              <input
                id="radio3"
                type="radio"
                name="delivery"
                defaultValue={20.0}
              />
              <label htmlFor="radio3">worldwide delivery ($20)</label>
            </div>
          </div>
          <div className="cart-summary" id="cart-summary">
            <h4 className="section-heading">summary</h4>
            <div className="cart-summary-row" id="cart-total">
              Total products{" "}
              <span className="cart-value">
                $<span id="cost_value">0.00</span>
              </span>
            </div>
            <div className="cart-summary-row">
              Shipping{" "}
              <span className="cart-value">
                $<span id="cost_delivery" />
              </span>
            </div>
            <div className="cart-summary-row cart-summary-row-total">
              Total{" "}
              <span className="cart-value">
                $<span id="total-total" />
              </span>
            </div>
          </div>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            className="cart-form"
            id="cart-form"
          >
            {/* Identify your business so that you can collect the payments. */}
            <input
              type="hidden"
              name="business"
              defaultValue="yourpaypal@email.com"
            />
            {/* Specify a Buy Now button. */}
            <input type="hidden" name="cmd" defaultValue="_xclick" />
            {/* Specify details about the item that buyers will purchase. */}
            <input
              type="hidden"
              name="item_name"
              defaultValue="Bestshop shop - checkout"
            />
            <input type="hidden" name="amount" id="amount" defaultValue="" />
            <input type="hidden" name="currency_code" defaultValue="USD" />
            {/* Display the payment button. */}
            <button
              type="submit"
              name="submit"
              className="btn btn-default btn-lg"
            >
              pay pal checkout <span className="ti-arrow-right" />
            </button>
          </form>
        </div>
        <div className="cart-widget-close-overlay" />
      </div>
    </>
  );
};

export default Cart;
