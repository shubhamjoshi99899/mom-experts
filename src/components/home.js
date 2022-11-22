import React, { useEffect, useState } from "react";
import Carousel from "./carousel";
import Hero from "./hero";
import Features from "./features";
import Stats from "./stats";
import Header from "./header";
import Testimonials from "./testimonials";
import Contact from "./contact";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header user={user} />
      <Carousel user={user} />
      <div
        data-aos="zoom-in"
        data-aos-duration="3000" //Here you can use any of the AOS animations
      >
        <Hero />
      </div>
      <div data-aos="fade-up">
        <Features />
      </div>
      <div data-aos="fade-right">
        <Stats />
      </div>

      <div data-aos="fade-left">
        <Testimonials />
      </div>
      <div data-aos="zoom-in">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
