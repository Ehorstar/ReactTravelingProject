import React, { useContext } from "react";
import TripsContext from "../contexts/TripsContext";
import styles from "../CSS/TripsHistory.module.css";
import button from "../CSS/Settings.module.css";

const TripsHistory = () => {
  const { trips, removeFromTrips } = useContext(TripsContext);

  return (
    <div className={styles.container}>
      <h1>Trips History</h1>
      {trips.map((trip) => (
        <div key={trip.id} className={styles["trip-card"]}>
          <h2>{trip.to}</h2>
          <p>Country: {trip.countryTo}</p>
          <p>Amount of Passengers: {trip.amount}</p>
          <p>Total Price: ${trip.price * trip.amount}</p>
          <p>Passengers: {trip.passengers.map((p, i) => (
            <div key={i}>{p.name} ({p.age})</div>
          ))}</p>
          <button className={button.button} onClick={() => removeFromTrips(trip.id)}>Remove</button>
          
        </div>
      ))}
    </div>
  );
};

export default TripsHistory;
