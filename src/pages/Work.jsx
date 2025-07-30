// src/pages/Works.jsx
import React from "react";
import AllProjects from "../sections/AllProjects";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const Works = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <Navbar />
        <div className="my-12">
            <AllProjects />
        </div>
        <Footer />
    </div>
  );
};

export default Works;
