import React, { useState, useEffect } from "react";
import HeroSectionComponent from "../components/HeroSectionComponent/HeroSectionComponent";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Home component mounted");
  }, []);

  return (
    <>
      {loading && <LoaderComponent />}
      <HeroSectionComponent setLoading={setLoading} />
    </>
  );
};

export default Home;