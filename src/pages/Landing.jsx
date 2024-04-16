import React from "react";
import Header from "../Components/Header";
import Side from "../Components/Side";
import Cart from "../Components/Cart";
import Catalog from "../Components/Catalog";
import Products from "../Components/Products";
import About from "../Components/About";
import Special from "../Components/Special";
import Testimonials from "../Components/Testimonials";
import Counter from "../Components/Counter";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Landing = () => {

  return (
    <div>
      <Header />
      <Side />
      {/* <Cart /> */}
      <Catalog />
      <Products />
      <About />
      <Special />
      <Testimonials />
      <Counter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
