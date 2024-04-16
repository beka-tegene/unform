import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact contact-with-map">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-heading">Get in Touch</h3>
          </div>
          <div className="col-md-3">
            <div className="contact-data">
              <h4>Ethiopia</h4>
              <ul>
                <li>
                  <span className="ti-mobile icon" />
                  +251 900 112 23344
                </li>
                <li>
                  <span className="ti-email icon" />
                  tekatechsolution@gmail.com
                </li>
                <li>
                  <span className="ti-map-alt icon" />
                  2Q92+MX <br />  Addis Ababa
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 col-md-push-1">
            <div className="contact-form">
              <form
                className="contact-forms"
                id="contact-form"
                action="https://team90degree.com/html/tf/bestshop-new-demo/bestshop-demo/mail.php"
                method="post"
              >
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    cols={10}
                    rows={7}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-round btn-g btn btn-primary btn-lg text-center float-right"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Form Message */}
      <div className="cr-contact-message-modal">
        <p className="form-messege" />
      </div>
      {/*// Form Message */}
      {/* contact-map */}
      <div id="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15761.950926710233!2d38.7524635!3d9.0191936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8530fd1efa39%3A0xb0867aa2a553c77!2sTEKA%20TECH%20SOLUTION!5e0!3m2!1sen!2set!4v1713265918212!5m2!1sen!2set"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      {/* contact-map-end */}
    </section>
  );
};

export default Contact;
