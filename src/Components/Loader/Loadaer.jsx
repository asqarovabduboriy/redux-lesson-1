import React from "react";
import "./Loader.css";

const Loader = ({ dataLength  }) => { 
  const loaders = Array(dataLength || 5).fill("").map((_, index) => (
    <div key={index} className="loader"></div>
  ));

  return (
    <div className="container wrapper">
      {loaders}
    </div>
  );
};

export default Loader;
