import React, { useEffect, useState } from "react";
import Carousel from './carousel'
import Hero from './hero'
import Features from "./features";
import Stats from "./stats";
import Header from './header';
import Testimonials from "./testimonials";
import Contact from "./contact";
const Home = () => {

  const [user, setUser] = useState({})

  useEffect(()=>{
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
   
  },[])

  return (
    <div>
      <Header user={user}/>
      <Carousel user={user} />
      <Hero />
      <Features />

      <Stats />

      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
