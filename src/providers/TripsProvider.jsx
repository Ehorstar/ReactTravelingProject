import { useEffect, useState } from "react";
import TripsContext from "../contexts/TripsContext";

const TripsProvider = ({ children }) => {
  const [trips, setTrips] = useState(() => {
    const saved = localStorage.getItem("trips");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  const addToTrips = (trip) => {
    setTrips((prev) => [...prev, trip]);
  };

  const removeFromTrips = (id) => {
    setTrips((prev) => prev.filter((trip) => trip.id !== id));
  };


  return (
    <TripsContext.Provider
      value={{
        trips,
        addToTrips,
        removeFromTrips,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};

export default TripsProvider;
