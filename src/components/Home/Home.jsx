import React from "react";
<<<<<<< HEAD

const Home = () => {
  return <div></div>;
=======
import Hero from "../Hero/Hero";
import FindRightOne from "../FindRightOne/FindRightOne";
import HowItWork from "../HowItWork/HowItWork";
import FeaturedPost from "../FeaturedPost/FeaturedPost";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <FindRightOne />
      <HowItWork />
      <FeaturedPost />
      <ContactUs />
    </div>
  );
>>>>>>> b0ad5e7 (feat:filter page)
};

export default Home;
