import React from "react";

const About = () => {
  return (
    <section className="about white-color" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>MT Uniform Solution website</h4>
            <h2>
              {" "}
              <span>About</span> us
            </h2>
            <p>
              MT Uniform Solution, based in Addis Ababa, is a premier uniform
              manufacturing company specializing in high-quality apparel for
              healthcare, hospitality, and education sectors. They offer a
              diverse range of uniforms, including PPE packs, sportswear, cook
              coats, server regalia, spa attire, and more. Their weaving
              department can customize outfits with logos and brands for any
              size group. With a mission to lead the uniform apparel industry,
              MT Uniform Solution prioritizes quality and customer satisfaction
            </p>
            <div className="read-more-btn">
              <a href="#">read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
