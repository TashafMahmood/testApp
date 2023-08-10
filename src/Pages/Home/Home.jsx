import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import SubHero from "../../components/SubHero/SubHero";
import EndHero from "../../components/EndHero/EndHero";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SubHero/>
      <EndHero/>
    </div>
  );
};

export default Home;
