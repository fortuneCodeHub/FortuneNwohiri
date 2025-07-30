// src/pages/Works.jsx
import React from "react";
import AllProjects from "../sections/AllProjects";
import Navbar from "../sections/navbar";
import Footer from "../sections/Footer";

const Works = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <div className="my-30">
        <AllProjects />
      </div>
      <Footer />
    </div>
  );
};

export default Works;
