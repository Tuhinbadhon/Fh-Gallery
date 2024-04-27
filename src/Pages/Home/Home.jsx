import React from "react";

import Slider from "./Slider/Slider";

import MeetAgents from "./MeetAgents";
import FAQ from "./FAQ";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>FH GALLERY | Home</title>
        </Helmet>
      </HelmetProvider>
      <div className="mt-5 mb-10">
        <Slider></Slider>
      </div>

      <div className="mt-5 mb-10">
        <MeetAgents></MeetAgents>
      </div>
      <div className="mt-5 mb-10">
        <FAQ></FAQ>{" "}
      </div>
    </div>
  );
};

export default Home;
