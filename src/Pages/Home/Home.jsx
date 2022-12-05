import BookShipping from "../../Shared/BookShipping/BookShipping";
import "./Home.css";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import WhyChooseUs from "../../Shared/WhyChooseUs/WhyChooseUs";
import GetQuote from "../../Shared/GetQuote/GetQuote";
import Footer from "../../Shared/Footer/Footer";
import HeroCarousel from "../../Shared/HeroCarousel/HeroCarousel";
import Process from "../../Shared/Process/Process";
import Testimonials from "../../Shared/Testimonials/Testimonials";
import MappingServices from "../Services/MappingServices";
import { useState } from "react";
import Gallery from "../../Shared/Gallery/Gallery";

// home slider review testimonial
// https://www.hyperui.dev/components/marketing/testimonials

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Services />
      <BookShipping />
      <WhyChooseUs />
      <Process />
       <GetQuote />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer/>
    </>
  );
};

export default Home;
