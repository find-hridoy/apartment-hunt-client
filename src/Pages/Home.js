import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import HouseRent from "../Components/HouseRent";
import Navbar from "../Components/Navbar";
import Service from "../Components/Service";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <HouseRent />
      <Service />
      <Footer />
    </>
  );
};

export default Home;
