import BookShipping from "../../Shared/BookShipping/BookShipping";
import "./Home.css";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import WhyChooseUs from "../../Shared/WhyChooseUs/WhyChooseUs";
import GetQuote from "../../Shared/GetQuote/GetQuote";
import HeroCarousel from "../../Shared/HeroCarousel/HeroCarousel";
import Process from "../../Shared/Process/Process";
import Testimonials from "../../Shared/Testimonials/Testimonials";
import MappingServices from "../Services/MappingServices";
import { useEffect, useState } from "react";
import Gallery from "../../Shared/Gallery/Gallery";
import Footer from "../../Shared/Footer/Footer";

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
    </>
  );
};

export default Home;
