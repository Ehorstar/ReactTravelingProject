import React from "react";
import { useLoaderData } from "react-router-dom";
import "../CSS/Tour.css";

const Tour = () => {
  const tours = useLoaderData();
    
  return (
    <div className="container">
      {tours.map((tour) => (
        <div key={tour.id}>{tour.description}</div>
      ))}
    </div>
  );
};

export default Tour;
